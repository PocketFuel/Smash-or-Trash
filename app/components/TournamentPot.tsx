import React from 'react';

interface TournamentPotProps {
  tournamentPot: number;
}

const TournamentPot: React.FC<TournamentPotProps> = ({ tournamentPot }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <h3 className="font-bold text-mist px-2 py-1 bg-eclipse border-2 border-night rounded-xl">Tournament Pot: {tournamentPot}</h3>
    </div>
  );
};

export default TournamentPot;