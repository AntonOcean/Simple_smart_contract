pragma solidity ^0.4.19; // версия компилятора

// откуда берем стандартные токены
import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';
import 'zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol';


contract SmartToken is StandardToken, MintableToken, BurnableToken { // наследование от стандартных токенов
    string public name = 'Antoxa Token'; // имя токена
    string public symbol = 'ANT'; // символ токена
    uint public decimals = 18; // количество знаков после запятой, вей
}