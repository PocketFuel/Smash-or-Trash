import "../styles/globals.css";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

const endpoint = "https://devnet.helius-rpc.com/?api-key=a3bb36f0-4593-45c5-b576-5264ef56c8de";
const wallets = useMemo(
    () => [
        new PhantomWalletAdapter()
    ],
    []
)

function MyApp({ Component, pageProps }) {
  return (
    <WalletModalProvider>
      <Component {...pageProps} />
    </WalletModalProvider>
  );
}

export default MyApp;

