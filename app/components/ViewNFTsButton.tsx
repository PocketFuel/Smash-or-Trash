import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import MyCollectibles from './MyCollectibles';
import WalletBalance from './WalletBalance';

interface ViewNFTsButtonProps {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
}

const ViewNFTsButton: React.FC<ViewNFTsButtonProps> = ({ isModalVisible, setIsModalVisible }) => {
  const { publicKey, signMessage } = useWallet();

  const handleViewNFTsClick = async () => {
    if (!publicKey || !signMessage) {
      alert('Please connect your wallet and ensure it supports message signing.');
      return;
    }

    try {
      const message = new TextEncoder().encode('Confirm to view your NFTs.');
      await signMessage(message);
      setIsModalVisible(true);
    } catch (error) {
      console.error('Signing message failed', error);
      alert('Failed to sign message.');
    }
  };

  return (
    <>
      <button
        className="w-full transition-all ease-in-out duration-500 mt-3 text-white text-lg bg-eclipse bottom-0 font-bold shadow-lg border-2 border-yellow-300 rounded-xl px-4 py-6 hover:border-primary focus:bg-none visited:bg-white visited:text-black"
        onClick={handleViewNFTsClick} // Use the handleViewNFTsClick function here
      >
        View My NFTs
      </button>
      {isModalVisible && publicKey && (
        <div className="modal-background">
          <div className="modal-content" style={modalStyle}>
            <button
              className="close-button"
              onClick={() => setIsModalVisible(false)}
            >
              Close
            </button>
            <MyCollectibles walletAddress={publicKey.toBase58()} />
            <WalletBalance />
          </div>
        </div>
      )}
    </>
  );
};

const modalStyle: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 999,
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  width: '80%',
  maxHeight: '80%',
  overflowY: 'auto',
  backgroundColor: '#1e293b', // Assuming 'bg-eclipse' is a dark shade
  color: 'white', // Assuming text color in the modal should be white
  border: '1px solid #374151', // Assuming 'border-night' is a dark grey
};

export default ViewNFTsButton;