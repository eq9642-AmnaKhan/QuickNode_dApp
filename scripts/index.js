

const ethers = require("ethers");

(async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://sleek-blissful-pool.ethereum-goerli.discover.quiknode.pro/3fee6cecb62cfa5d56a22959c8d1f3db12bf71a2/");
  const contractAddress = '0x364652a881824b09789314c2707d266B54873185';
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

	//lets read on the contract

    const quickContract = new ethers.Contract(contractAddress, abi, provider);

    const count = await quickContract.peopleCount();

	console.log(count.toNumber());


	//lets write on the contract

	// const signer = provider.getSigner() ;


	// provider.send("eth_requestAccounts", []).then( () => {
	// 	provider.listAccounts().then( (accounts) => {
	// 		signer = provider.getSigner(accounts[0]);

	// 	})
	// });


	// const quickContract2 = new ethers.Contract(contractAddress, abi, signer);
	

	// const transaction = await quickContract2.addPerson("ammyyy", "Galaxy");
	// await transaction.wait();

	// console.log("one person added.");

    
})();
