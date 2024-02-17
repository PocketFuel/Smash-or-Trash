import React, { useState, useEffect } from 'react';
import BracketSlot from './BracketSlot';
import { CompetitorProps } from './Competitor'; // Ensure this import is correct based on your project structure

interface BracketSlotProps {
  competitor: CompetitorProps;
}

const Bracket: React.FC = () => {
  const [competitors] = useState<CompetitorProps[]>([]);
  const [matches, setMatches] = useState<CompetitorProps[][]>([]);

  useEffect(() => {
    // Adjusted to use CompetitorProps[]
    const generateMatches = (competitors: CompetitorProps[]) => {
      let roundMatches = [];
      for (let i = 0; i < competitors.length; i += 2) {
        // Ensure there's a competitor to match with
        if (competitors[i + 1]) {
          roundMatches.push([competitors[i], competitors[i + 1]]);
        } else {
          // Handle odd number of competitors
          roundMatches.push([competitors[i]]);
        }
      }
      setMatches(roundMatches);
    };

    generateMatches(competitors);
  }, [competitors]);

  const renderMatches = () => {
    return matches.map((match, index) => (
      <div key={index} className="match">
        {match.map((competitor, idx) => (
          // Adjusted to pass the entire competitor object
          <BracketSlot key={idx} competitor={competitor} />
        ))}
      </div>
    ));
  };

  return (
    <div className="bracket">
      {renderMatches()} {/* Call renderMatches to display the matches */}
    </div>
  );
};

export default Bracket;