import React from "react";

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Rohit", "Dhoni", "Rahul", "Jadeja"];
  const evenTeam = ["Bumrah", "Shami", "Ashwin", "Pant", "Gill", "Iyer"];

  // Destructuring
  const [captain, viceCaptain, ...restOdd] = oddTeam;
  const [leadBowler, ...restEven] = evenTeam;

  // Merging two arrays
  const T20players = ["Virat", "Rohit", "Rahul"];
  const RanjiTrophyPlayers = ["Pujara", "Vihari", "Saha"];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <p>Captain: {captain}</p>
      <p>Vice-Captain: {viceCaptain}</p>
      <p>Others: {restOdd.join(", ")}</p>

      <h2>Even Team Players</h2>
      <p>Lead Bowler: {leadBowler}</p>
      <p>Others: {restEven.join(", ")}</p>

      <h2>All Players (Merged)</h2>
      <p>{allPlayers.join(", ")}</p>
    </div>
  );
};

export default IndianPlayers;
