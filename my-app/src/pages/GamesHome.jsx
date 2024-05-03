import React, { useState,useEffect } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalAPi'
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GamesByGenresId from '../components/GamesByGenresId';

const GamesHome = () => {
  const [allGamesList, setAllGamesList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState('Action');

  useEffect(()=>{
    getAllGamesList();
    getGamesListByGenresId(4);//defualt value
  }, []);

  const getAllGamesList = () =>{
    GlobalApi.getAllGames.then((resp) => {
      console.log(resp.data.results);
      setAllGamesList(resp.data.results);
    })
  };

  const getGamesListByGenresId= (id) =>{
      console.log("GenreId:",id);
      GlobalApi.getGameListByGenreId(id).then((resp) => {
      console.log("Game List By GenreId: ",resp.data.results);
      setGameListByGenres(resp.data.results);
    });
  }


//We have to add condition because the below banner is executing before fetching from api server, above
  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='h-full hidden md:block'>
        <GenreList genresId={(genresId)=>getGamesListByGenresId(genresId)}
                   selectedGenresName={(name)=>setSelectedGenresName(name)}
        />
      </div>
      <div className='col-span-3'>
        {allGamesList?.length>0&& gameListByGenres.length > 0?
        <div>
          <Banner gameBanner={allGamesList[0]}/>
          <TrendingGames gameList={allGamesList}/>
          <GamesByGenresId gameList={gameListByGenres}
          selectedGenresName={selectedGenresName}/>
        </div>
        :null}
      </div>
    </div>
  )
}
export default GamesHome