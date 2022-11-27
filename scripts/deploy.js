require("@nomicfoundation/hardhat-toolbox");
const { ethers } = require("hardhat");

async function main() {

    // const  [deployer] =await ethers.getSigners();
    // console.log("Deploying QuickNode Contract with the account", deployer.address);

    const qnContract = await ethers.getContractFactory("QNContract");

    const deployedContract = await qnContract.deploy();

    await deployedContract.deployed();

    console.log("Contract for QuickNode deployed at: ", deployedContract.address);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
	console.error(error);
	process.exit(1);
  });