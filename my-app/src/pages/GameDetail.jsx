import React from 'react';
import { useLocation } from 'react-router-dom';
import GameVideos from '../components/GameVideos';
import Search from '../components/Search';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GameDetail = () => {
  const location = useLocation();
  const { game } = location.state.gameProps;
  console.log("GameDetail", game);
  
  return (
    <div>
      <Navbar/>
      <Search/>
      <div className="p-6 rounded-lg flex flex-wrap">
        <div className="w-full md:w-1/2">
          <h1 className="text-white text-3xl font-bold mb-4">{game.name}</h1>
          <p className="text-white mb-2">Released: {game.released}</p>
          <p className="text-white mb-2">Rating: {game.rating}</p>
          
          {/* Display genres */}
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
          
          {/* Display platforms */}
          <div className="mb-4">
            <h3 className="text-white mb-2">Platform(s):</h3>
            <div className="flex flex-wrap">
              {game.platforms.map((platform) => {
                try {
                  return (
                    <span key={platform.platform.id} className="text-white bg-gray-600 px-2 py-1 rounded-md mr-2 mb-2">
                      {platform.platform.name}
                    </span>
                  );
                } catch (error) {
                  console.error('Error rendering platform:', error);
                  return null; // or provide a placeholder UI
                }
              })}
            </div>
          </div>
          
          {/* Display stores */}
          <div className="mb-4">
            <h3 className="text-white mb-2">Stores:</h3>
            <div className="flex flex-wrap">
              {game.stores ? (
                game.stores.map((store) => {
                  try {
                    return (
                      <span key={store.store.id} className="text-white bg-gray-600 px-2 py-1 rounded-md mr-2 mb-2">
                        {store.store.name}
                      </span>
                    );
                  } catch (error) {
                    console.error('Error rendering store:', error);
                    return null; // or provide a placeholder UI
                  }
                })
              ) : (
                <span className="text-white">No stores available</span>
              )}
            </div>
          </div>
        </div>
        
        {/* Display Game Videos */}
        <div className="w-full md:w-1/2 flex items-start">
          <GameVideos gameId={game.id} gameName={game.name} />
        </div>
        
        {/* Display screenshots */}
        <div className="w-full">
          <h1 className="text-white text-3xl font-bold mb-4">Screenshots:</h1>
          <ul className="grid grid-cols-2 gap-4">
            {game.short_screenshots.map((ss) => (
              <li key={ss.id}>
                <img src={ss.image} alt="screenshot" className="w-full h-auto rounded-lg" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default GameDetail;
