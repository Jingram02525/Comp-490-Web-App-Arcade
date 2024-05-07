import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';

const Results = (props) => {
  const location = useLocation();
  const gameResults = location.state ? location.state.gameResults : [];

  return (
    <div>
      <Navbar/>
      <Search/>
      <div className="results-container grid grid-cols-3 gap-4">
        {
          gameResults.map(game => (
            <Link key={game.id} to={`/game/${game.name}`} state={{ gameProps: { game } }}>
              <div key={game.id} className='bg-[#76a8f75e] rounded-lg p-2 pt-0 pl-0 pr-0 group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                <h3 className=" text-white text-lg font-semibold">{game.name}</h3>
                <img src={game.background_image} alt="game" className="h-72 rounded-lg object-cover"/>
              </div>
            </Link>
          ))
        }
      </div>
      <div className='mt-5 hidden md:block'>
        <h2 className='font-bold text-3xl text-white'>Top Search</h2>
        <div className='hidden md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-5'>
            {
              gameResults.slice(0, 4).map(item => (
                <Link key={item.id} to={`/game/${item.name}`} state={{ gameProps: { item } }}>
                  <div key={item.id} className='bg-[#76a8f75e] rounded-lg p-2 pt-0 pl-0 pr-0 group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                    <img src={item.background_image} className='h-72 rounded-lg object-cover'/>
                    <h2 className='text-white text-xl font-bold'>{item.name}</h2>
                  </div>
                </Link>
              ))
            }
        </div>
      </div>
      <br/><br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default Results;
