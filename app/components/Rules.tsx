import React from 'react';

const Rules: React.FC = () => {
  return (
    <section className="w-full flex flex-col gap-3 max-w-3xl pb-6 mx-auto">
      <h3 className="font-bold text-white text-xl">Rules:</h3>
      <ol className="flex flex-col gap-3 ml-5">
        <li className="text-day/50 text-md md:text-lg">1 v 1. Single Elimination Tournament.</li>
        <li className="text-day/50 text-md md:text-lg">1st, 2nd, & 3rd Place take 10%, 6%, and 4% of the pot each.</li>
        <li className="text-day/50 text-md md:text-lg">Top 100 Voters share 10% of the pot.</li>
        <li className="text-day/50 text-md md:text-lg">40% of the pot goes to the LP.</li>
        <li className="text-day/50 text-md md:text-lg">30% of the pot used to buy DTP for giveaways</li>
      </ol>
    </section>
  );
};

export default Rules;