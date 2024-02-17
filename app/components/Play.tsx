import React, { useState } from 'react';
import ViewNFTsButton from './ViewNFTsButton';

interface PlayProps {
  onPlay: () => void;
}

const Play: React.FC<PlayProps> = ({ onPlay }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-3 max-w-5xl justify-center items-center mx-auto">
      <button id="play" className="play-button w-full text-xl transition-all ease-in-ease-out duration-500 mt-3 text-white h-20 bg-eclipse bottom-0 font-bold shadow-lg border-2 border-yellow-300 rounded-xl px-4 hover:border-primary focus:bg-none visited:bg-white visited:text-black" onClick={() => setIsModalVisible(true)}>Play</button>
      <div>
        <ViewNFTsButton isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      </div>
    </div>
  );
};

export default Play;