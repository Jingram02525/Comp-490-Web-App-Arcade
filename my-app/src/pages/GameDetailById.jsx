import React from 'react';

const GameDetailsPage = ({ game }) => {
  //console.log("Game:",game);
  return (
    <div>
      <h2>{game.name}</h2>
      <img src={game.background_image} alt="Game background" />
      {/* Display other details of the game */}
    </div>
  );
}

export default GameDetailsPage;
