import React, {useEffect} from 'react'

//Props
const Banner = ({gameBanner}) => {
    useEffect(() =>{
        console.log("gameBanner",gameBanner);
    }, []);
  return (
    <div className='relative'>
        <div className='absolute bottom-0'>
            <h2 className='text-[24px] text-white bg-slate-600 rounded-full font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white px-2 p-1'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} 
             className='md:h-[320px] w-full object-cover rounded-xl' 
             alt="game banner" />
    </div>
  )
}

export default Banner