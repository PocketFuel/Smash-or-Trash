import React, { useState, useEffect } from 'react';
import NextLobbyButton from './NextMatchButton';
import MatchResultsModal from './MatchResultsModal';
import { useCompetitor } from '../hooks/useCompetitor';
import { Competitor } from '../hooks/types';

const NextMatch = () => {
  const { competitors } = useCompetitor();
  const [nextCompetitors, setNextCompetitors] = useState<Competitor[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastMatchScores, setLastMatchScores] = useState({ player1: 0, player2: 0 });

  useEffect(() => {
    if (competitors.length >= 2) {
      // Implementing Fisher-Yates shuffle for better randomness
      let shuffled = [...competitors];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setNextCompetitors(shuffled.slice(0, 2));
    }
  }, [competitors]);

  const startNextLobby = () => {
    console.log('Starting next lobby...');
    setIsModalOpen(false);
  };

  const showResults = () => {
    setLastMatchScores({ player1: 5, player2: 3 });
    setIsModalOpen(true);
  };

  return (
    <div>
      <NextLobbyButton onStartNextLobby={startNextLobby} />
      <MatchResultsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        playerScores={lastMatchScores} 
        loadNextMatch={startNextLobby} // Assuming startNextLobby is the intended function
        matchPot={0} // Assuming a default value of 0, adjust as necessary
      />
      <button onClick={showResults}>Show Last Match Results</button>
    </div>
  );
};

export default NextMatch;