import React from 'react';
import { useCompetitor } from '../hooks/useCompetitor';

interface Competitor {
  id: string;
  name: string;
  imgSrc: string;
}

interface CompetitorListProps {
  competitors: Competitor[];
}

const CompetitorList: React.FC = () => {
  const { competitors } = useCompetitor();
  
  return (
    <div className='grid grid-cols-6 gap-3 w-full'>
      {competitors.map((competitor) => (
        <div key={competitor.id}>
          <img className='w-full' src={competitor.imgSrc} alt={competitor.name} />
          <p>{competitor.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CompetitorList;