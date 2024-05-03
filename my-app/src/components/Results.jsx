import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';
import Navbar from './Navbar';

const Results = (props) => {
  const location = useLocation();
  const gameResults = location.state ? location.state.gameResults : [];

  return (
    <div>
      <Navbar/>
      <Search/>
      <div className="results-container">
        <ul>
        {
          gameResults.map(game => (
            <li key={game.id}>
              <h3>{game.name}</h3>
              <img src={game.background_image} alt="game"/>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
}

export default Results;