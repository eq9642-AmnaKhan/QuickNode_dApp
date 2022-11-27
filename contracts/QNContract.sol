// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract QNContract {
    
    // address public owner;
    // constructor()  {
    // owner = msg.sender;
    //     }

    uint public peopleCount = 0;
    
    struct Person {
        uint id;
        string _fName;
        string _lName;
    }
    
    mapping(uint => Person) public people;

    

    function addPerson(string memory _fName, string memory _lName) public {
        peopleCount +=1;
        people[peopleCount] = Person(peopleCount, _fName, _lName);
    }

     
}
