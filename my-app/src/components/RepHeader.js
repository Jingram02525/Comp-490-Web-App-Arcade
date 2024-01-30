import React from 'react';

const RepHeader = () => {
    return(
        <header>
      <nav className="navbar">
        <div className="logo">
          <a href="index.html">RePlay</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </div>
        <ul className="nav-links">
          <li><a href="roms.html">ROMs</a></li>
          <li><a href="games.html">Games</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="register.html">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};
    
export default RepHeader;
