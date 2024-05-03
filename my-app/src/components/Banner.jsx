import React, {useEffect, useState} from 'react'

//Props
const Banner = ({gameBanner}) => {
    const [randomIndex, setRandomIndex] = useState(0);
    useEffect(() =>{
        console.log("gameBanner",gameBanner);
    }, []);
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-950 to-transparent w-full'>
            <h2 className='text-[24px] text-white font-bold shadow-black'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white px-2 p-1'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} 
             className='md:h-[320px] w-full object-fit rounded-xl' 
             alt="game banner" />
    </div>
  )
}

export default Banner