import React, { useState, useEffect } from 'react';

interface TimerProps {
    onTimeEnd: () => void; // Callback when the timer ends
    startTimer: boolean; // Prop to control the start of the timer
  }

  const Timer: React.FC<TimerProps> = ({ onTimeEnd, startTimer }) => {
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        // Only start the timer if startTimer is true
        if (!startTimer) return;

        // Exit early when we reach 0
        if (timeLeft === 0) {
            onTimeEnd();
            return;
        }
        
    const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, [startTimer, timeLeft, onTimeEnd]);
    
    useEffect(() => {
        // Reset timer when startTimer changes from false to true
        if (startTimer) {
        setTimeLeft(30); // Reset to initial time if needed
        }
    }, [startTimer]);
    
    return (
        <div className="text-xl flex gap-3 text-mist" id="timer">
            <span className="font-bold text-day text-lg">Time:</span>
            <p className="">{timeLeft}<span className="ml-1">s</span></p>
        </div>
    );
};

export default Timer;