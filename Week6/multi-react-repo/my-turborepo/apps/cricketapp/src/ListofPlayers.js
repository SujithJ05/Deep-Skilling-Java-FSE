import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Player1", score: 85 },
    { name: "Player2", score: 60 },
    { name: "Player3", score: 72 },
    { name: "Player4", score: 40 },
    { name: "Player5", score: 95 },
    { name: "Player6", score: 68 },
    { name: "Player7", score: 100 },
    { name: "Player8", score: 55 },
    { name: "Player9", score: 88 },
    { name: "Player10", score: 42 },
    { name: "Player11", score: 77 },
  ];

  // Using map() to display all players
  const allPlayers = players.map((p, index) => (
    <li key={index}>
      {p.name} - {p.score}
    </li>
  ));

  // Using arrow function filter to get players with score < 70
  const lowScorers = players.filter((p) => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
