# QuickNode Project

This project demonstrates a basic smart contract deployment to a Goerli Testnet using QuickNode's RPC APIs. It comes with a sample contract, a test for that contract (index.js), and a script that deploys that contract.

#### Smart Contract Details
The solidity smart contract gives a basic functionality of adding a person(id -> autogenerated, first/last name -> entered by the user) into a mapping array. We can also get the count of the total people registered/added in the block chain by calling the _peopleCount_ public variable.


#### Deployment
The smart contract for the project was built and deployed using Hardhat, and deployed to Goerli test network.

#### Test Scripts
To interact with the deployed smart contract *index.js* was used as a test script. It contains the calls to the RPC methods using JavaScript.


**Smart Contract Address =
0x364652a881824b09789314c2707d266B54873185**

**Transactions** for this deployed Smart Contract for this project can be seen here
[QuickNode Project](https://goerli.etherscan.io/address/0x364652a881824b09789314c2707d266B54873185)
