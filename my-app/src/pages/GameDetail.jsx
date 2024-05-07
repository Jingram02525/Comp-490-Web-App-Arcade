import React from 'react';
import { useLocation } from 'react-router-dom';

const GameDetail = () => {
  const location = useLocation();
  const { game } = location.state.gameProps;

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h1 className="text-white text-3xl font-bold mb-4">{game.name}</h1>
      <p className="text-white mb-2">Released: {game.released}</p>
      <p className="text-white mb-2">Rating: {game.rating}</p>
      <div className="mb-4">
        <h3 className="text-white mb-2">Genre(s):</h3>
        <div className="flex flex-wrap">
          {game.genres.map((genre) => (
            <span key={genre.id} className="text-white bg-gray-600 px-2 py-1 rounded-md mr-2 mb-2">
              {genre.name}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-white mb-2">Platform(s):</h3>
        <div className="flex flex-wrap">
          {game.platforms.map((platform) => (
            <span key={platform.platform.id} className="text-white bg-gray-600 px-2 py-1 rounded-md mr-2 mb-2">
              {platform.platform.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-white mb-2">Screenshots:</h3>
        <ul className="grid grid-cols-2 gap-4">
          {game.short_screenshots.map((ss) => (
            <li key={ss.id}>
              <img src={ss.image} alt="screenshot" className="w-full h-auto rounded-lg" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameDetail;
