# Smash or Trash

## What is it?

A FCFS, Smash or Pass style, Single Elimination Tournament, where viewers vote on the coolest NFT. Vote are made in SPL tokens and go straight to the Pot. The top 3 winners take 10%, 6%, and 4% of the pot respectively. 

## Where can I play it?
On Solana, you can play at TrashSmash.xyz

## Who built it? 
CrayHans (HANS_SOL_OG on X), a Degenerate Trash Panda community member.

## How much does it cost?
It costs 0.05 SOL or $5 to play. It’s free to spectate but you vote in SPL tokens. The top 3 competitors and the top 100 voters get paid out of the Tournament pot so theres a chance you win it back or break even if you participate in the entire tournament.

## What tokens are supported?

# SOL
So11111111111111111111111111111111111111112

# USDC
EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v

# RAIN
rainH85N1vCoerCi4cQ3w6mCf7oYUdrsTFtFzpaRwjL

# JUP
JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN

# Bonk
DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263
Components

## WalletBalance.tsx
A component designed to fetch and display the balance of a wallet address from the Solana blockchain.

## Currency.tsx
A component that allows users to select a currency from a dropdown menu and displays the balance of the selected currency.

## Lobby.tsx
This is where players sit until the tournament begins.

## Add.tsx
This component lets you add a new competitor by adding a Display name and Image. This is a test component. I created it so that I could make 12 competitors and fill out a bracket. It is needed but may not make it into the final game once the Wallet Connect and Get NFTs function is working.

## Bracket.tsx
A four column layout. Column 1 displays 6 MatchUp.tsx components. A MatchUp component contains two Compeitor components and a p tag for ‘VS’ in between them. flex, flex-col, gap-1. As GameState.tsx updates the BracketSlot.tsx component would update as well. You would see Competitor status go from Playing… to Winner! Or Loser! Depending on the outcome of the voting from the Spectators. 

## Match.tsx
Displays information about the current match, including the round and the competitors involved.

## Competitor.tsx
Represents a competitor in the game. It handles displaying competitor information, managing vote actions, and signaling when a competitor is ready.

## Game.tsx
A component that manages the state and logic for a game, including managing the readiness of competitors, handling votes, managing game progress, and displaying competitors and a countdown.

## GameState.tsx
This component seems to be an earlier or alternative version of managing the game state, including handling the readiness of competitors and the game countdown. It's not directly referenced in the Game.tsx component you've provided, but it contains similar functionality.

## Countdown.tsx
A countdown timer that is intended to be displayed before the game starts. It counts down from a specified number of seconds.

## Spectator.tsx
Not sure if I need to make this. The gameplay is always occurring live on the app so anyone viewing the site is considered a Spectator. Anyone who clicks a Competitor and votes is considered a Voter.

## Pot.tsx
Shows the current match and round pots, presumably representing some form of scoring or betting mechanic within the game context.

## Currency.tsx
The Currency.tsx component is a React component designed to allow users to select a cryptocurrency from a dropdown menu and fetch their balance for that currency

## BracketSlot.tsx
Deprecated. Calling this MatchUp.tsx now

## Rules.tsx
A component that displays the rules of a game or competition in a fixed position on the screen.

## TipButton.tsx
A button that alters the vote multiplier

## TipSection.tsx
A section component that holds 8 TipButton.tsx components

## Tournament.tsx
I think I need to put the Bracket.tsx component into another component called Tournament so I can mange the Tournament state. When the Tournament concludes I need to present a pop up modal wth an after action report of what happened in all the matches, each competitors vote counts, their total match pot contribution from spectators, and the total tournament pot numbers as well. The top 3 winners should be clearly displayed in the Leaderboard.tsx component and the top 100 voters by click would be displayed in order from most to least in the Top100Voters.tsx component.

Leaderboard.tsx - This component displays the top 3 tournament winners after the tournament settles.

Top100Voters.tsx - This component displays The top 100 voters after the tournament settles.

Results.tsx - This is the popup modal component that shows up when the tournament concludes.

Share.tsx - This component allows people to share the game on social media

Challenge.tsx - This component allows people to challenge friends to 1v1 matches separate from tournaments. Players would wager their own bets. Random spectators would vote.

NextMatch - When a match concludes this button would summon the next match that needs to be voted on until every match i nthe tournament has been voted on by all competitors.
