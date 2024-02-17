import React, { useState } from 'react';
import Participants from './Participants';
import { CompetitorProps } from './Competitor';
import CompetitorList from './CompetitorList';


const GameLobby = () => {
  const [Competitor, setCompetitor] = useState<CompetitorProps[]>([]);

  const addCompetitor = (competitor: CompetitorProps) => {
    setCompetitor(prev => [...prev, competitor]);
  };

  return (
    <div>
      <Participants readyCount={Competitor.length} />
      <CompetitorList />
    </div>
  );
};

export default GameLobby;