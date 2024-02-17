import React from 'react';

interface TipButtonProps {
  id: string;
  multiplier: number;
  buttonText: string;
  setPointMultiplier: (multiplier: number, id: string) => void;
}

const TipButton: React.FC<TipButtonProps> = ({ id, multiplier, buttonText, setPointMultiplier }) => {
  return (
    <button 
      id={id} 
      className="vote-modifier w-full gap-3 bg-eclipse rounded-xl border-2 border-night py-3 px-4 hover:border-dusk active:border-mist focus:border-mist transition-all ease-in-ease-out duration-700" 
      onClick={() => setPointMultiplier(multiplier, id)}
    >
      <p className="text-white">{buttonText}</p>
      <h2 className="font-bold text-3xl text-white">{multiplier}</h2>
      <p className="text-white">$RAIN</p>
    </button>
  );
};

export default TipButton