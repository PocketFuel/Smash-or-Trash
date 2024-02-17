import React from 'react';

interface NextMatchButtonProps {
  onStartNextLobby: () => void;
}

const NextMatchButton: React.FC<NextMatchButtonProps> = ({ onStartNextLobby }) => {
  return (
    <button className="w-full text-black bg-mist font-bold shadow-lg border-2 mt-3 border-yellow-300 rounded-xl p-2 hover:bg-grime hover:border-primary hover:text-white" onClick={onStartNextLobby}>
      Next Match
    </button>
  );
};

export default NextMatchButton;