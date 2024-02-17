import React from 'react';
import TipButton from './TipButton';

// Define the properties for each button variant
const buttonConfigs = [
  { id: 'shrimp', multiplier: 1, buttonText: 'Shrimp' },
  { id: 'lobster', multiplier: 2, buttonText: 'Lobster' },
  { id: 'fish', multiplier: 5, buttonText: 'Fish' },
  { id: 'big-fish', multiplier: 10, buttonText: 'Big Fish' },
  { id: 'barracuda', multiplier: 20, buttonText: 'Barracuda' },
  { id: 'dolphin', multiplier: 50, buttonText: 'Dolphin' },
  { id: 'shark', multiplier: 100, buttonText: 'Shark' },
  { id: 'whale', multiplier: 250, buttonText: 'Whale' },
];

// Add a prop to TipSection for setting the multiplier
const TipSection: React.FC<{setActiveMultiplier: (multiplier: number) => void}> = ({ setActiveMultiplier }) => {
  const setPointMultiplier = (multiplier: number) => {
    setActiveMultiplier(multiplier);
  };

  return (
    <section className="flex flex-col items-center">
      <p className="w-full max-w-5xl col-span-3 py-3 text-center font-bold text-white text-xl force-visible">Wanna increase your click size?</p>  
      <div id="vote-modifiers" className="w-full max-w-5xl grid grid-cols-4 col-span-3 gap-2 md:gap-3 mb-3 bg-darkestnight">
        {buttonConfigs.map((config) => (
          <TipButton key={config.id} {...config} setPointMultiplier={setPointMultiplier} />
        ))}
      </div>
    </section>
  );
};

export default TipSection;