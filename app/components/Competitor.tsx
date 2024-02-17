import React from 'react';

export interface CompetitorProps {
  id: string;
  name: string;
  imgSrc: string;
  votes: number;
  voteForCompetitor: (id: string) => void; // This function should be implemented in a parent component
  rank: number;
  booted: boolean;
  onReady: (id: string) => void;
  tags: string[];
}

// Extending the Competitor interface
export enum CompetitorStatus {
  Winner = 'Winner',
  Loser = 'Loser',
  First = 'First',
  Second = 'Second',
  Third = 'Third',
  // Add more as needed
}

export interface Competitor {
  id: string;
  name: string;
  status?: CompetitorStatus; // Optional field to track status
  // Other fields...
}

const Competitor: React.FC<CompetitorProps> = ({ id, name, imgSrc, votes, voteForCompetitor, onReady }) => {
  const placeholderImg = 'path/to/your/default/image.png'; // Adjust the path as necessary

  return (
    <div className="competitor relative w-full text-black bg-mist bottom-0 font-bold shadow-lg border-2 border-yellow-300 rounded-xl px-1 pb-3 pt-1 hover:bg-grime hover:border-primary hover:text-white" id={`competitor-${id}`} tabIndex={0}>
      <span className="absolute w-12 text-center top-0 right-5 mt-4 z-15 bg-eclipse rounded-full border-2 border-night px-1 py-.5 font-bold text-white" id={`votes-${id}`}>{votes}</span>
      <img className="w-full object-fit mb-2 rounded-xl" src={imgSrc || placeholderImg} alt={`Player ${name}`} />
      <div className="w-full mt-2 flex flex-col justify-between items-center">
        <button onClick={() => voteForCompetitor(id)} className="vote-button text-white font-bold py-2 px-4 rounded" data-competitor-id={id}>Vote for {name}</button>
        <button onClick={() => onReady(id)} className="ready-button w-full transition-all ease-in-ease-out duration-500 mt-3 text-white h-full bg-eclipse bottom-0 font-bold shadow-lg border-2 border-yellow-300 rounded-xl px-4 py-3 hover:border-primary focus:bg-none visited:bg-white visited:text-black">Ready up</button>
      </div>
    </div>
  );
};

export default Competitor;