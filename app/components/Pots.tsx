import React from 'react';
import MatchPot from './MatchPot';
import TournamentPot from './TournamentPot';
import { usePot } from './PotContext';

const Pots = () => {
  const { matchPot, tournamentPot } = usePot();

  return (
    <div className="flex gap-3 justify-center">
      <MatchPot matchPot={matchPot} />
      <TournamentPot tournamentPot={tournamentPot} />
    </div>
  );
};

export default Pots;