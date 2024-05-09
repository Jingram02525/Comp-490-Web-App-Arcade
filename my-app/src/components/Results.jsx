import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';

const Results = (props) => {
  const location = useLocation();
  const gameResults = location.state ? location.state.gameResults : [];

  useEffect(() => {
    // Retrieve the theme from localStorage
    const theme = localStorage.getItem('theme');
    // Set the background color based on the retrieved theme
    document.body.style.backgroundColor = theme === 'light' ? '#e5e7eb' : '#100525';
  }, []);

  // Determine the text color class based on the theme
  const textColorClass = localStorage.getItem('theme') === 'light' ? 'text-black' : 'text-white';

  return (
    <div>
      <Navbar />
      <Search />
      <div className="results-container grid grid-cols-3 gap-4">
        {gameResults.map(game => (
          <Link key={game.id} to={`/game/${game.name}`} state={{ gameProps: { game } }}>
            <div className='bg-[#76a8f75e] rounded-lg p-2 pt-0 pl-0 pr-0 group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
              <h3 className={`${textColorClass} text-lg font-semibold`}>{game.name}</h3>
              <div className="flex justify-center"> {/* Add Tailwind CSS classes to center the image */}
                <img src={game.background_image} alt="game" className="h-72 rounded-lg object-cover" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='mt-5 hidden md:block'>
        <h2 className={`font-bold text-3xl ${textColorClass}`}>Top Search</h2>
        <div className='hidden md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-5'>
          {gameResults.slice(0, 4).map(game => (
            <Link key={game.id} to={`/game/${game.name}`} state={{ gameProps: { game } }}>
              <div className='bg-[#76a8f75e] rounded-lg p-2 pt-0 pl-0 pr-0 group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                <div className="flex justify-center"> {/* Add Tailwind CSS classes to center the image */}
                  <img src={game.background_image} className='h-72 rounded-lg object-cover' />
                </div>
                <h2 className={`${textColorClass} text-xl font-bold`}>{game.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <br /><br /><br /><br />
      <Footer />
    </div>
  );
}

export default Results;
