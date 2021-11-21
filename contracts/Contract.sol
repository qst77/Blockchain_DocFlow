pragma solidity >=0.4.21 <0.6.0;
contract A {
uint val = 100;
    address admin;

    constructor () public {
        admin = msg.sender;
    }

function getValue () public view returns (uint) {
    return val;
}

function getAdmin () public view returns (address) {
    return admin;
}

function setValue (uint256 _val) public {
if (msg.sender == admin)
    val =_val;
}

}

/*
contract B {
//запрос к контракту А admin

function setValue (uint256 _val) public {
if (msg.sender == admin??)
val =_val;
}
}
*/

