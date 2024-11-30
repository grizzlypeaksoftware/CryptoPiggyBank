# Crypto Piggy Bank

A time-locked crypto savings application built on Ethereum, using **Solidity** and **Ganache**. Users can deposit ETH, set a lockup period, and withdraw their funds after the specified lockup period expires. This project demonstrates how to deploy and interact with smart contracts, creating a secure and user-friendly savings mechanism on the blockchain.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contract Details](#contract-details)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Overview

The **CryptoPiggyBank** project demonstrates a simple **time-locked savings contract** on Ethereum. Users can deposit ETH into the contract, set a lockup period (in seconds), and withdraw their funds after the specified time has passed. This application uses **Solidity** for the smart contract and **Ganache** for local Ethereum blockchain testing.

---

## Features

- **Deposit ETH**: Users can deposit Ethereum (ETH) into the contract.
- **Set Lockup Period**: Users can specify a lockup period (in seconds) during deposit.
- **Withdraw Funds**: Withdraw funds only after the lockup period has expired.
- **Check Balance**: Users can view their current balance.
- **Check Lockup Period**: Users can check the lockup period set during deposit.

---

## Installation

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **Ganache**: [Install Ganache](https://www.trufflesuite.com/ganache)
- **Truffle**: [Install Truffle](https://www.trufflesuite.com/truffle)

### 1. Clone the repository

Clone this repository to your local machine:

```bash
git clone https://github.com/grizzlypeaksoftware/CryptoPiggyBank.git
cd CryptoPiggyBank
```

### 2. Install dependencies

In the project folder, run:

```bash
npm install
```

This will install all necessary dependencies for the project.

---

## Usage

### 1. Set up Ganache

- Open **Ganache** and create a new workspace for the local Ethereum blockchain.
- Make sure to keep **Ganache** running while interacting with the contract.
- Import one of the Ethereum addresses from Ganache into **MetaMask**.

### 2. Configure Truffle

Make sure your `truffle-config.js` file is configured to connect to the Ganache network. It should look something like this:

```javascript
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,  // Default Ganache port
      network_id: "*",  // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",  // Solidity version
    },
  },
};
```

### 3. Deploy the contract

Deploy the contract to the local Ganache blockchain by running:

```bash
truffle migrate --reset --network development
```

### 4. Interact with the contract via the web interface

1. Run a local server to host the `index.html` file.
   - You can use **Python**:
     ```bash
     python3 -m http.server
     ```
   - Or **Node.js**:
     ```bash
     npm install -g http-server
     http-server
     ```
2. Open your browser and go to `http://localhost:8000` (or the port provided by your local server).
3. Connect **MetaMask** to your local Ganache network and import the test accounts provided by Ganache.

---

## Contract Details

### Smart Contract Functions

- **deposit(uint256 lockupPeriod)**: 
  - Deposits ETH into the contract and sets the lockup period.
  - `lockupPeriod`: Time in seconds before funds can be withdrawn.

- **withdraw(uint256 amount)**:
  - Allows users to withdraw a specified amount of ETH after the lockup period has expired.

- **getBalance()**:
  - Returns the current balance of the caller’s account in the contract.

- **getLockupTime()**:
  - Returns the lockup time set during the last deposit.

---

## Technologies Used

- **Solidity**: Programming language for writing smart contracts on Ethereum.
- **Truffle**: Development framework for Ethereum.
- **Ganache**: Personal blockchain for Ethereum development.
- **Web3.js**: JavaScript library for interacting with Ethereum.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### **Conclusion**

The **CryptoPiggyBank** project offers a simple but powerful way to store ETH securely for a specific period, with a clear and easy-to-use web interface. It’s perfect for developers looking to explore Ethereum smart contracts or anyone interested in implementing a time-locked savings solution on the blockchain.

For more information, or to ask questions, feel free to open an issue or reach out to **Grizzly Peak Software**.