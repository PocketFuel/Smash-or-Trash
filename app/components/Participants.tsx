import React from 'react';

interface ParticipantsProps {
  readyCount: number;
}

const Participants: React.FC<ParticipantsProps> = ({ readyCount }) => {
  return (
    <div>
      <span style={{ fontWeight: 'bold' }}>Participants:</span> {readyCount}/12
    </div>
  );
};

export default Participants;