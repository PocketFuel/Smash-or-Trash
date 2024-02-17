import React from 'react';

interface MatchPotProps {
  matchPot: number;
}

const MatchPot: React.FC<MatchPotProps> = ({ matchPot }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <h3 className="font-bold text-mist px-2 py-1 bg-eclipse border-2 border-night rounded-xl">Match Pot: {matchPot}</h3>
    </div>
  );
};

export default MatchPot;