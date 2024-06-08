// src/components/BlockchainIntegration.js
import Web3 from 'web3';
import { useEffect, useState } from 'react';

const BlockchainIntegration = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    web3.eth.requestAccounts().then(accounts => {
      setAccount(accounts[0]);
      web3.eth.getBalance(accounts[0]).then(balance => {
        setBalance(web3.utils.fromWei(balance, 'ether'));
      });
    });
  }, []);

  return (
    <div>
      <h2>Blockchain Integration</h2>
      {account ? (
        <div>
          <p>Account: {account}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      ) : (
        <p>Connecting to blockchain...</p>
      )}
    </div>
  );
};

export default BlockchainIntegration;
