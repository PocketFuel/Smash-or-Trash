import React, { useEffect, useState } from 'react';

interface CountdownProps {
  onFinish: () => void; // Add this prop
}

const Countdown: React.FC<CountdownProps> = ({ onFinish }) => {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      onFinish(); // Call onFinish when countdown reaches 0
    }
  }, [seconds, onFinish]);

  return (
    <div className="flex items-center justify-center"> {/* Removed "hidden" class */}
      <div className="text-white font-bold mb-9">
        Game starts in <span>{seconds}</span> seconds
      </div>
    </div>
  );
};

export default Countdown;