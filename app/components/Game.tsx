import React, { useState, useEffect } from 'react';
import Competitor from './Competitor';
import Countdown from './Countdown';
import Timer from './Timer';
import MatchResultsModal from './MatchResultsModal';

interface GameProps {
  setActiveMultiplier: (multiplier: number) => void;
}

const Game: React.FC<GameProps> = ({ setActiveMultiplier }) => {
  const [votes1, setVotes1] = useState(0);
  const [votes2, setVotes2] = useState(0);
  const [competitor1Ready, setCompetitor1Ready] = useState(false);
  const [competitor2Ready, setCompetitor2Ready] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [matchPot, setMatchPot] = useState(1000); // Example match pot value
  const [activeMultiplier] = useState(1); // Add this state to hold the active multiplier


  useEffect(() => {
    if (competitor1Ready && competitor2Ready && !gameInProgress) {
      setShowCountdown(true);
    }
  }, [competitor1Ready, competitor2Ready, gameInProgress]);

  useEffect(() => {
    if (showCountdown) {
      const timer = setTimeout(() => {
        if (!gameInProgress) {
          startGame();
        }
      }, 3000); // Assuming a 3-second countdown for demonstration
      return () => clearTimeout(timer);
    }
  }, [showCountdown, gameInProgress]);

  const handleReady = (id: string) => {
    if (id === '1') {
      setCompetitor1Ready(true);
    } else if (id === '2') {
      setCompetitor2Ready(true);
    }
  };

  const startGame = () => {
    setGameInProgress(true);
    setShowCountdown(false);
    setVotes1(0);
    setVotes2(0);

    // Example usage of setActiveMultiplier when the game starts
    setActiveMultiplier(2); // Sets the multiplier to 2 when the game starts
  };

  // Example function to call when the game ends
  const endGame = () => {
    setGameInProgress(false);
    setShowResultsModal(true);
    // Other end game logic
  };

  // onClose function for the modal
  const handleCloseModal = () => {
    setShowResultsModal(false);
  };
  
  const voteForCompetitor = (competitorId: '1' | '2') => {
    console.log(`Voting attempted for competitor ${competitorId} with gameInProgress: ${gameInProgress}`);
    if (!gameInProgress) {
      alert('Voting is only allowed during the game.');
      return;
    }
    const increment = 1 * activeMultiplier; // Use the activeMultiplier for vote increment
    if (competitorId === '1') {
      setVotes1(prevVotes => prevVotes + increment);
    } else if (competitorId === '2') {
      setVotes2(prevVotes => prevVotes + increment);
    }
  };
  
  const loadNextMatch = () => {
    // Logic to load the next match
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {!gameInProgress && !showCountdown && (
        <button onClick={() => setShowCountdown(true)} disabled={gameInProgress || !competitor1Ready || !competitor2Ready}>
          Start Game
        </button>
      )}
      <div className="flex w-full max-w-5xl gap-6 py-6">
        <Competitor 
          id="1" 
          name="Competitor 1" 
          imgSrc="pit.png" 
          votes={votes1} 
          voteForCompetitor={() => voteForCompetitor('1')} 
          rank={1} 
          booted={true} 
          onReady={handleReady} 
          tags={['Genesis', 'OG']}
        />
        <Competitor 
          id="2" 
          name="Competitor 2" 
          imgSrc="monterrey.png" 
          votes={votes2} 
          voteForCompetitor={() => voteForCompetitor('2')} 
          rank={2} 
          booted={false} 
          onReady={handleReady} 
          tags={['Genesis', 'OG']}
        />
      </div>
      {showCountdown && <Countdown onFinish={startGame} />}
      {gameInProgress && <p className='text-white font-bold mb-9'>Game in progress...</p>}
      <Timer onTimeEnd={endGame} startTimer={gameInProgress} />
      <div>
      <MatchResultsModal 
        isOpen={showResultsModal} 
        onClose={handleCloseModal} 
        playerScores={{ player1: votes1, player2: votes2 }} 
        matchPot={matchPot}
        loadNextMatch={loadNextMatch} // Add this line
      />
      </div>
    </div>
  );
};

export default Game;