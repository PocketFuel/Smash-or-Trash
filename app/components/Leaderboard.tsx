import React from 'react';
import Card from './Card';

interface Player {
  rank: number;
  playerName: string;
  imgSrc: string;
  booted: boolean;
  tags: string[];
}

interface LeaderboardProps {
  players: Player[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ players }) => {
  return (
    <section className="w-full grid grid-cols-2 max-w-5xl lg:mx-auto items-center md:grid-cols-3 lg:grid-cols-3 mb-3 gap-3 mx-2 border-1 rounded-lg p-6 md:pt-12 lg:pt-12 mt-12">
      {players.map((player) => (
        <Card key={player.rank} {...player} />
      ))}
      <p className="w-full col-span-3 text-center font-bold text-mist text-2xl">The best of the best, voted by the community.</p>
    </section>
  );
};

export default Leaderboard