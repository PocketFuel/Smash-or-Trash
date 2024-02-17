import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

const WalletBalance = () => {
  const { publicKey } = useWallet();
  const [balance, setBalance] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!publicKey) return;

    const connection = new Connection("https://mainnet.helius-rpc.com/?api-key=b6b97ed4-c507-40f7-ad75-e46051af0379");
    connection.getBalance(publicKey).then((lamports) => {
      const sol = lamports / LAMPORTS_PER_SOL;
      setBalance(sol);
    });
  }, [publicKey]);

  if (!publicKey) return <div>Please connect your wallet.</div>;

  return (
    <div>
      Wallet Balance: {balance ? `${balance} SOL` : 'Loading...'}
    </div>
  );
};

export default WalletBalance;