import React from 'react';
import Competitor, { CompetitorProps } from './Competitor'; // Adjust the path as necessary

interface BracketSlotProps {
  competitor: CompetitorProps;
}

const BracketSlot: React.FC<BracketSlotProps> = ({ competitor }) => {
  // Assuming these are the required props based on MyCollectibles' selectNFT function
  const defaultCompetitorProps = {
    votes: competitor.votes || 0,
    voteForCompetitor: competitor.voteForCompetitor || (() => {}),
    rank: competitor.rank || 0,
    booted: competitor.booted || false,
    onReady: competitor.onReady || (() => {}),
    tags: competitor.tags || [],
  };

  return (
    <div className="bracket-slot">
      <Competitor {...competitor} {...defaultCompetitorProps} />
    </div>
  );
};

export default BracketSlot;