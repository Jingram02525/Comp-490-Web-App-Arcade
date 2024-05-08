// Import React and necessary hooks
import React, { useState, useEffect } from 'react';

// Import components and services
import GenreList from '../components/GenreList';
import GlobalApi from '../Services/GlobalApi';
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GamesByGenresId from '../components/GamesByGenresId';

// Define the GamesHome component
const GamesHome = () => {
  // Define state variables
  const [allGamesList, setAllGamesList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState('Action');

  // Fetch all games list and set initial game list by genres
  useEffect(() => {
    getAllGamesList();
    getGamesListByGenresId(4); // Default value
  }, []);

  // Function to fetch all games list
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      console.log("All Games:", resp.data.results);
      setAllGamesList(resp.data.results);
    });
  };

  // Function to fetch game list by genres
  const getGamesListByGenresId = (id) => {
    console.log("GenreId:", id);
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      console.log("Game List By GenreId: ", resp.data.results);
      setGameListByGenres(resp.data.results);
    });
  };

  // Select a random game from allGamesList
  const randomGameIndex = Math.floor(Math.random() * allGamesList.length);
  const randomGame = allGamesList[randomGameIndex];

  // Render the component
  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='h-full hidden md:block'>
        <GenreList
          genresId={(genresId) => getGamesListByGenresId(genresId)}
          selectedGenresName={(name) => setSelectedGenresName(name)}
        />
      </div>
      <div className='col-span-3'>
        {allGamesList.length > 0 && gameListByGenres.length > 0 ?
          <div>
            <Banner gameBanner={randomGame} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenresId gameList={gameListByGenres} selectedGenresName={selectedGenresName} />
          </div>
          : null}
      </div>
    </div>
  );
};

// Export the component
export default GamesHome;
