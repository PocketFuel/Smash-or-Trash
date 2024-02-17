import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

require('@solana/wallet-adapter-react-ui/styles.css');

const StickyHeader: React.FC = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="flex justify-between items-center py-3 px-3 md:px-6">
          <div className="flex items-center">
            <img src="/cd-logo.png" alt="CrayonDAOO" className="w-64" />
          </div>
          <div className="flex items-center">
            <WalletMultiButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
