import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import WalletBalance from './WalletBalance';

function classNames(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

const currencies = [
    { name: 'USDC', address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v' },
    { name: 'SOL', address: 'So11111111111111111111111111111111111111112' },
    { name: 'JUP', address: 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN' },
    { name: 'RAIN', address: 'rainH85N1vCoerCi4cQ3w6mCf7oYUdrsTFtFzpaRwjL' },
    { name: 'BONK', address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263' }
];

export default function Currency({ onSelect }: { onSelect: (currency: string) => void }) {
    const [selectedCurrency, setSelectedCurrency] = useState(currencies.find(currency => currency.name === 'RAIN'));
    const [balance, setBalance] = useState<number | null>(null);
    const [isSignedIn, setIsSignedIn] = useState(false); // New state to track sign-in status

    // Placeholder for fetching balance logic
    async function fetchBalance(currencyAddress: string): Promise<number> {
        // Your logic to fetch the balance from the user's wallet using the currency's address
        return Math.random() * 100; // Placeholder return
    }

    useEffect(() => {
        if (selectedCurrency && isSignedIn) { // Check if user is signed in before fetching balance
            fetchBalance(selectedCurrency.address).then(setBalance);
        }
    }, [selectedCurrency, isSignedIn]); // Add isSignedIn as a dependency

    const handleSelect = (currencyName: string) => {
        const currency = currencies.find(c => c.name === currencyName);
        if (currency) {
            setSelectedCurrency(currency);
            onSelect(currency.name);
        }
    };

    // Placeholder function to simulate signing in
    // In a real application, this would be replaced with actual sign-in logic
    const signIn = () => {
        setIsSignedIn(true); // Set isSignedIn to true to simulate a user signing in
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="hidden inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {selectedCurrency?.name}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {currencies.map((currency) => (
                            <Menu.Item key={currency.name}>
                                {({ active }) => (
                                    <button
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                        onClick={() => handleSelect(currency.name)}
                                    >
                                        {currency.name}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};