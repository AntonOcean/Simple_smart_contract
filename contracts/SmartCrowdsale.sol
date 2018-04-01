pragma solidity ^0.4.19; // версия компилятора

// откуда берем стандартные токены
import 'zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';


contract SmartCrowdsale is MintedCrowdsale { // наследование от стандартных токенов

    function SmartCrowdsale(
        address _wallet, // при деплое
        address _token

    ) public Crowdsale(1000, _wallet, ERC20(_token)) { // конструктор
    } // курс конвертации 1 eth = 1000 токенов
}