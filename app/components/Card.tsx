import React from 'react';

interface CardProps {
  rank: number;
  playerName: string;
  imgSrc: string;
  booted: boolean;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ rank, playerName, imgSrc, booted, tags }) => {
  return (
    <label className="w-full col-span-3 lg:col-span-1 p-2 border-2 border-night bg-darknight hover:border-dusk hover:bg-night transition-all ease-in-out duration-700 active:border-mist rounded-xl relative">
      <div className="flex flex-col w-full gap-2 rounded-md relative">
        <p className="text-lg font-bold text-black bg-night px-3 absolute top-0 right-0 mr-1 rounded-sm">No. {rank}</p>
        <input className="absolute z-20 bottom-0 right-0 mr-2 mb-2 bg-night h-4 w-4 border-2 border-dusk text-mist active:border-mist focus:ring-mist" id={`no${rank}`} name="notification-method" type="checkbox" />
        <img className="w-full -mr-8 -mb-2 aspect-ratio: 1/1 absolute bottom-0 right-0 z-20 sm:z-0" src={imgSrc} alt="" />
        <div className="flex flex-col gap-2">
          <h4 className="text-sm uppercase font-bold text-day">
            {playerName}
          </h4>
          <div className="flex flex-col gap-1.5 py-6 justify-start items-start">
            {tags.map((tag, index) => (
              <p key={index} className="uppercase font-bold text-xs text-darknight bg-mist px-1.5 rounded-full">{tag}</p>
            ))}
          </div>
          <h4 className="text-xs uppercase font-bold text-dusk">
            Booted: {booted ? 'True' : 'False'}
          </h4>
        </div>
      </div>
    </label>
  );
};

export default Card;