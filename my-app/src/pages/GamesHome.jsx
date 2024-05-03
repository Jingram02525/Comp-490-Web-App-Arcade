import React, { useState,useEffect } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';

const GamesHome = () => {
  const [allGamesList, setAllGamesList] = useState();
  useEffect(()=>{
    getAllGamesList();
  }, []);

  const getAllGamesList = () =>{
    GlobalApi.getAllGames.then((resp) => {
      console.log(resp.data.results);
      setAllGamesList(resp.data.results);
    })
  };
//We have to add condition because the below banner is executing before fetching from api server, above
  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='h-full hidden md:block'>
        <GenreList/>
      </div>
      <div className='col-span-3'>
        {allGamesList?.length>0?
        <div>
          <Banner gameBanner={allGamesList[0]}/>
          <TrendingGames gameList={allGamesList}/>
        </div>
        :null}
      </div>
    </div>
  )
}
export default GamesHome