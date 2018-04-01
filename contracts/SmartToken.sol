pragma solidity ^0.4.19;


import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';
import 'zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol';


contract SmartToken is StandardToken, MintableToken, BurnableToken {
    string public name = 'Antoxa Token';
    string public symbol = 'ANT';
    uint public decimals = 18;
}