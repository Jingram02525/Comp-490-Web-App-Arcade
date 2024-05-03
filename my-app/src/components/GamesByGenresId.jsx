import React, { useEffect } from 'react'

const GamesByGenresId = ({gamelist}) => {
    useEffect(() =>{
        console.log('GamesList', gameList);
    });
  return (
    <div>
        {gameList.map((item) => (
            <div></div>
        ))};
    </div>
  )
}

export default GamesByGenresId