import React from 'react';
import './globals.css';
import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

import StickyHeader from './components/StickyHeader';
import Socials from './components/Socials';
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import Add from './components/Add';
import Match from './components/Match';
import Game from './components/Game';
import Rules from './components/Rules';
import Footer from './components/Footer';
import TipSection from './components/TipSection';
import Pot from './components/Pot';
import GameState from './components/GameState';

const endpoint = "https://devnet.helius-rpc.com/?api-key=a3bb36f0-4593-45c5-b576-5264ef56c8de";
const wallets = useMemo(
    () => [
        new PhantomWalletAdapter()
    ],
    []
)

export default function Home() {
  return (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <div className={style.wrapper}>
                <StickyHeader />
                <Header />
                <Leaderboard players={players} />
                <Add />
                <Match />
                <Pot />
                <Game />
                <GameState />
                <TipSection />
                <Rules />
                <Footer />
                <Socials />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  )
}
