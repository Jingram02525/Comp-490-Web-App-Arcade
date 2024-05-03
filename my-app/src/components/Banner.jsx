import React, {useEffect} from 'react'

//Props
const Banner = ({gameBanner}) => {
    useEffect(() =>{
        console.log("gameBanner",gameBanner);
    }, []);
  return (
    <div>
        <img src={gameBanner.background_image} 
             className='md:h-[320px] object-cover rouneded-lg' 
             alt="game banner" />
    </div>
  )
}

export default Banner