import React, { useState,useEffect } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../components/Banner';

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
      <div className='col-span-3 bg-blue-400'>
        {allGamesList?.length>0?
        <Banner gameBanner={allGamesList[0]}/>
        :null}
      </div>
    </div>
  )
}
export default GamesHome