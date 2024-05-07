import React from 'react';
import { useLocation } from 'react-router-dom';

const GameDetail = () => {
  const location = useLocation();
  const { game } = location.state.gameProps;

  return (
    <div>
      <h1>{game.name}</h1>
      <p>Released: {game.released}</p>
      <p>Rating: {game.rating}</p>
      <h3>Genre(s):</h3>
      { 
        game.genres.map(g => `${g.name} | `)
      }

      <h3>Platform(s):</h3>
      { 
        game.platforms.map(p => `${p.platform.name} | `)
      }

      <ul>
        {
          game.short_screenshots.map(ss => <li key={ss.id}><img src={ss.image} alt='screenshot'/></li>)
        }
      </ul>
    </div>
  );
}

export default GameDetail;
