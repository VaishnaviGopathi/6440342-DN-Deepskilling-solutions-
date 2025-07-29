// src/components/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 85 },
    { name: 'Dhoni', score: 60 },
    { name: 'Jadeja', score: 55 },
    { name: 'Ashwin', score: 95 },
    { name: 'Rahul', score: 50 },
    { name: 'Gill', score: 72 },
    { name: 'Bumrah', score: 40 },
    { name: 'Iyer', score: 91 },
    { name: 'Pant', score: 100 },
    { name: 'Shami', score: 30 },
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players (Name & Score)</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score &lt; 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
