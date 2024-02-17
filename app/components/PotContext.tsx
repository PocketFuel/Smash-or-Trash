import React, { createContext, useContext, useState } from 'react';

interface PotContextType {
  matchPot: number;
  tournamentPot: number;
  updatePots: (votes: number, multiplier: number) => void;
}

const PotContext = createContext<PotContextType>({
    matchPot: 0,
    tournamentPot: 0,
    updatePots: () => {} // Provide a no-op function or suitable default implementation
  });

export const PotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [matchPot, setMatchPot] = useState(0);
  const [tournamentPot, setTournamentPot] = useState(0);

  const updatePots = (votes: number, multiplier: number) => {
    const totalVotes = votes * multiplier;
    setMatchPot((prev) => prev + totalVotes);
    setTournamentPot((prev) => prev + totalVotes);
  };

  return (
    <PotContext.Provider value={{ matchPot, tournamentPot, updatePots }}>
      {children}
    </PotContext.Provider>
  );
};

export const usePot = () => {
    const context = useContext(PotContext);
    if (context === undefined) {
      throw new Error('usePot must be used within a PotProvider');
    }
    return context;
  };