

const ethers = require("ethers");
require("dotenv").config({path: ".env"});


const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_fName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lName",
				"type": "string"
			}
		],
		"name": "addPerson",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "people",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_fName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lName",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "peopleCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;

const provider = new ethers.providers.JsonRpcProvider(QUICKNODE_HTTP_URL);
const contractAddress = '0x364652a881824b09789314c2707d266B54873185';
 
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const quickContract = new ethers.Contract(contractAddress, abi, provider);


(async () => {
  
	//lets read on the contract

    const count = await quickContract.peopleCount();

	console.log(count.toNumber());



	//lets write on the contract, for writing we need a signer (a wallet with a private key)

	const contractWithWallet = quickContract.connect(wallet);

	const tx = await contractWithWallet.addPerson("Vit", "Bue");
	await tx.wait();

	console.log("One person added !");


    
})();
