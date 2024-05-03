import React, { useEffect } from 'react'

const GamesByGenresId = ({gameList, selectedGenresName}) => {
    useEffect(() =>{
        console.log('GamesList', gameList);
    },[]);
  return (
    <div>
      <h2 className='font-bold text-[30px] dark:text-white mt-5'>{selectedGenresName} Games</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
          {gameList.map((item) => (
              <div className='bg-[#76a8f75e] p-3 pl-2 pr-2 rounded-lg pb-12 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
                <img src={item.background_image} alt="background image" className='w-full h-[80%] rounded-xl object-fit'/>
                <h2 className='text-[20px] dark:text-white font-bold'>
                    {item.name}<span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'>{item.metacritic}</span>
                </h2>
                <h2 className='text-gray-500 dark:text-gray-200'>⭐{item.rating}  💬{item.reviews_count}  🔥{item.suggestions_count}</h2>
              </div>
          ))};
      </div>
    </div>
  )
}

export default GamesByGenresId