window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      const contractAddress = "0xD7bc50855B76C45435c64D69932E3Adefb4F5633";
      const abi = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "balances",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "lockupTime",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "lockupPeriod",
              "type": "uint256"
            }
          ],
          "name": "deposit",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "getLockupTime",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        }
      ];
  
      const contract = new web3.eth.Contract(abi, contractAddress);

      // Deposit funds with lock-up period
      window.depositFunds = async () => {
        const lockupPeriod = document.getElementById('lockupPeriod').value;
        const depositAmount = web3.utils.toWei("1", "ether");
  
        await contract.methods.deposit(lockupPeriod).send({
          from: accounts[0],
          value: depositAmount
        });
      };
  
      // Check balance
      window.checkBalance = async () => {
        const balance = await contract.methods.getBalance().call({ from: accounts[0] });
        document.getElementById('balance').innerText = `Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`;
      };
  
      // Check lockup time
      window.checkLockupTime = async () => {
        const lockupTime = await contract.methods.getLockupTime().call({ from: accounts[0] });
        document.getElementById('lockupTime').innerText = `Lock-up Time: ${lockupTime}`;
      };
  
      // Withdraw funds
      window.withdrawFunds = async () => {
        const withdrawAmount = document.getElementById('withdrawAmount').value;
        if (!withdrawAmount) {
          alert('Please enter an amount to withdraw');
          return;
        }
        const withdrawAmountWei = web3.utils.toWei(withdrawAmount, 'ether');
        
        await contract.methods.withdraw(withdrawAmountWei).send({ from: accounts[0] });
        alert(`Successfully withdrew ${withdrawAmount} ETH`);
      };
    }
  });