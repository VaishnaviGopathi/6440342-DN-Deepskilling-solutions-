// src/components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const teamPlayers = ['Rohit', 'Gill', 'Kohli', 'Iyer', 'Dhoni', 'Pant'];

  // Destructuring Odd and Even team players
  const oddPlayers = teamPlayers.filter((_, index) => index % 2 === 0);
  const evenPlayers = teamPlayers.filter((_, index) => index % 2 !== 0);

  // Merge arrays using spread operator
  const T20players = ['Virat', 'Rohit', 'Gill'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Saha'];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>All Indian Players (Merged)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
