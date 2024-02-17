'use client'
import React, { useMemo, useState } from 'react';
import '../globals.css';
import StickyHeader from '../components/StickyHeader';
import Socials from '../components/Socials';
import Header from '../components/Header';
import Leaderboard from '../components/Leaderboard';
import Add from '../components/Add';
import Match from '../components/Match';
import Game from '../components/Game'; // Assuming this is correctly imported
import Rules from '../components/Rules';
import Footer from '../components/Footer';
import TipSection from '../components/TipSection';
import Pots from '../components/Pots';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import GameLobby from '../components/GameLobby';
import { CompetitorProvider } from '../components/CompetitorContext';
import { PotProvider } from '../components/PotContext';
import CompetitorList from '../components/CompetitorList';
import MyCollectibles from '../components/MyCollectibles';
import Play from '../components/Play';


const players = [
  {
    rank: 1,
    playerName: 'Pit the Panda',
    id: '1',
    name: 'DTP #1453',
    imgSrc: 'pit.png',
    booted: false,
    tags: ['Genesis', 'OG'],
  },
  {
    rank: 2,
    playerName: 'Vipr the Panda',
    id: '2',
    name: 'DTP #1454',
    imgSrc: 'vipr.png',
    booted: false,
    tags: ['Genesis', 'OG'],
  },
  {
    rank: 3,
    playerName: 'Monterrey Rice',
    id: '3',
    name: 'DTP #1455',
    imgSrc: 'monterrey.png',
    booted: true,
    tags: ['Genesis', 'OG'],
  },
];

interface GameProps {
  setActiveMultiplier: (multiplier: number) => void;
}

export function Home() {
  const [isGameVisible, setIsGameVisible] = useState(false);
  const [multiplier, setMultiplier] = useState(1); // Define state here
  const endpoint = "https://mainnet.helius-rpc.com/?api-key=b6b97ed4-c507-40f7-ad75-e46051af0379";
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  const setActiveMultiplier = (newMultiplier: number) => {
    setMultiplier(newMultiplier); // Now accessible
  };
   
  const onPlay = () => {
    setIsGameVisible(true);
  };

return (
  <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <CompetitorProvider>
          <PotProvider>
            <div className="wrapper h-full px-3 md:px-6 lg:px-12 bg-black">
              <StickyHeader />
              <Header />
              <Leaderboard players={players} />
              <Rules />
              <div>
                <Play onPlay={onPlay} />
                {isGameVisible && (
                  <>
                    <MyCollectibles walletAddress="craywnTUX67S9wP7LJnm4cfvAB3gvKwYcaUXcRXk2u3" />
                    <CompetitorList />
                    <Add />
                    <GameLobby />
                    <Match />
                    <Pots />
                    <TipSection setActiveMultiplier={setActiveMultiplier} />
                    <Game setActiveMultiplier={setActiveMultiplier} />
                  </>
                )}
              </div>
              <Footer />
              <Socials />
            </div>
          </PotProvider>
        </CompetitorProvider>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
);
};

export default Home;