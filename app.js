window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      const contractAddress = "contractAddress";
      const abi = [
        // ABI goes here
      ];
  
       
    const contract = new web3.eth.Contract(abi, contractAddress);

    // Function to deposit funds with lock-up period
    window.depositFunds = async () => {
      const depositAmount = document.getElementById('depositAmount').value;
      const lockupPeriod = document.getElementById('lockupPeriod').value;

      if (!depositAmount || depositAmount <= 0) {
        alert('Please enter a valid amount to deposit');
        return;
      }

      const depositAmountWei = web3.utils.toWei(depositAmount, 'ether');

      console.log(depositAmountWei);
      try {
        await contract.methods.deposit(lockupPeriod).send({
          from: accounts[0],
          value: depositAmountWei
        });
        alert(`${depositAmount} ETH successfully deposited with a lockup period of ${lockupPeriod} seconds`);
      } catch (error) {
        console.error(error);
        alert('Error depositing funds');
      }
    };

    // Function to check the balance of the current account
    window.checkBalance = async () => {
      try {
        const balance = await contract.methods.getBalance().call({ from: accounts[0] });
        document.getElementById('balance').innerText = `Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`;
      } catch (error) {
        console.error(error);
        alert('Error checking balance');
      }
    };

    // Function to check the lock-up period for the current account
    window.checkLockupTime = async () => {
      try {
        const lockupTime = await contract.methods.getLockupTime().call({ from: accounts[0] });
        document.getElementById('lockupTime').innerText = `Lock-up Time: ${lockupTime}`;
      } catch (error) {
        console.error(error);
        alert('Error checking lockup time');
      }
    };

    // Function to withdraw funds from the contract
    window.withdrawFunds = async () => {
      const withdrawAmount = document.getElementById('withdrawAmount').value;

      if (!withdrawAmount || withdrawAmount <= 0) {
        alert('Please enter a valid amount to withdraw');
        return;
      }

      const withdrawAmountWei = web3.utils.toWei(withdrawAmount, 'ether');
      
      try {
        await contract.methods.withdraw(withdrawAmountWei).send({ from: accounts[0] });
        alert(`${withdrawAmount} ETH successfully withdrawn`);
      } catch (error) {
        console.error(error);
        alert('Error withdrawing funds');
      }
    };
  } else {
    alert('Please install MetaMask to use this dApp');
  }
});