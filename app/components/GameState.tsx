import React, { useState, useEffect } from 'react';

const GameState = () => {
  const [competitor1Ready, setCompetitor1Ready] = useState(false);
  const [competitor2Ready, setCompetitor2Ready] = useState(false);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [countdown, setCountdown] = useState(3); // Countdown before the game starts
  const [gameTime, setGameTime] = useState(30); // Duration of the game

  // Handle competitor ready up
  const readyUp = (competitorId: string) => {
    if (competitorId === '1') {
      setCompetitor1Ready(true);
    } else if (competitorId === '2') {
      setCompetitor2Ready(true);
    }
  };

  // Start the countdown
  useEffect(() => {
    let countdownTimer: NodeJS.Timeout;
    if (competitor1Ready && competitor2Ready && !gameInProgress) {
      countdownTimer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 1) {
            return prevCountdown - 1;
          }
          clearInterval(countdownTimer);
          setGameInProgress(true); // Start the game
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(countdownTimer);
  }, [competitor1Ready, competitor2Ready, gameInProgress]);

  // Handle the game timer
  useEffect(() => {
    let gameTimer: NodeJS.Timeout;
    if (gameInProgress) {
      gameTimer = setInterval(() => {
        setGameTime((prevTime) => {
          if (prevTime > 1) {
            return prevTime - 1;
          }
          clearInterval(gameTimer);
          setGameInProgress(false); // End the game
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(gameTimer);
  }, [gameInProgress]);

  return (
    <div>
      {!gameInProgress && (
        <>
          <button onClick={() => readyUp('1')} disabled={competitor1Ready}>
            {competitor1Ready ? 'Readied Up!' : 'Ready Up Competitor 1'}
          </button>
          <button onClick={() => readyUp('2')} disabled={competitor2Ready}>
            {competitor2Ready ? 'Readied Up!' : 'Ready Up Competitor 2'}
          </button>
        </>
      )}

      {gameInProgress && (
        <div className='text-white'>
          <p className='text-white'>Game in progress...</p>
          <p>Time remaining: {gameTime}s</p>
        </div>
      )}

      {!gameInProgress && competitor1Ready && competitor2Ready && countdown > 0 && (
        <div className='text-white'>
          <p>Game starting in {countdown}...</p>
        </div>
      )}
    </div>
  );
};

export default GameState;