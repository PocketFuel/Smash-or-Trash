import React from 'react';


const Match = () => {
  return (
    <>
    <section className="flex flex-col gap-3 w-full max-w-5xl mx-auto">
        <span className="font-bold text-center text-day pt-3 text-lg">Round 1: Happening now</span>
        <div className="flex gap-3 justify-center items-center">
            <span id="p1" className="font-semibold text-3xl text-white">Player 1</span>
            <span className="font-semibold text-3xl text-mist">vs</span>
            <span id="p2" className="font-semibold text-3xl text-white">Player 2</span>
        </div>
    </section>
    </>
  );
};

export default Match;