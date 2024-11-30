// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CryptoPiggyBank {
    mapping(address => uint256) public balances;
    mapping(address => uint256) public lockupTime;

    // Deposit funds with a specified lock-up time
    function deposit(uint256 lockupPeriod) public payable {
        require(msg.value > 0, "Deposit must be greater than 0");

        // Update balances and lockup time
        balances[msg.sender] += msg.value;
        lockupTime[msg.sender] = block.timestamp + lockupPeriod;
    }

    // Withdraw funds after the lock-up period
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        require(block.timestamp >= lockupTime[msg.sender], "Funds are locked");

        // Transfer the funds to the user
        payable(msg.sender).transfer(amount);
        balances[msg.sender] -= amount;
    }

    // Get balance
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    // Get lock-up time for the user
    function getLockupTime() public view returns (uint256) {
        return lockupTime[msg.sender];
    }
}
