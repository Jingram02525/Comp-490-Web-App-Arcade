import React from 'react'
import GlobalApi from '../Services/GlobalAPi.jsx'
import { useEffect, useState } from 'react'

// I don't understand why my tailwind css doesn't work properly for hover effects??

const GenreList = () => {

    const [genreList, setGenreList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(()=>{
        getGenreList();
    }, [])

    const getGenreList = () =>{
        GlobalApi.getGenreList.then((resp) => {
            console.log(resp.data.results);
            setGenreList(resp.data.results);
        })
    }
  return (
    <div>
        <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
        {genreList.map((item, index) =>(
            <div
            onClick={()=>setActiveIndex(index)} 
            className={`flex gap-2 items-center mb-2 cursor-pointer 
                          hover:bg-gray-300 p-2 rounded-lg
                          hover:dark:bg-gray-600
                          ${activeIndex==index?"bg-gray-300 dark:bg-gray-600":null}`}>
                <img src={item.image_background} 
                className={`w-[40px] h-[40px] 
                           object-cover rounded-lg 
                           group-hover:scale-125 transition-all ease-out
                           duration-300
                           ${activeIndex==index?"scale-125":null}`} alt="genre-list"/>
                <h3 className={`dark:text-white text-[18px] 
                                 group-hover:font-bold transition-all ease-out
                                 duration-300 ${activeIndex==index?"font-bold":null}`} 
                                 alt="genre-list">{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList