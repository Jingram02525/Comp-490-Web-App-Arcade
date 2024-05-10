import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";
import Logo from '../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check if username exists in localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Handle Link logic here
  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Performing search...');
  };

  const handleSignOut = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/login");
  };

  return (
    /*<header className='bg-[#1E0B41] text-white p-5'>
      <nav className='flex justify-between items-center'>
        <div>
          <Link to="/" className='text-2xl no-underline text-white font-bold'>RePlay</Link>
        </div>
        <div className='flex items-center justify-center mt-2 no-underline'>
          <input
            type="text"
            placeholder="ROMs, Games, etc,..."
            className='p-2.5 rounded text-base bg-[#250E4F] text-white mr-2.5 no-underline border-[#250E4F]'
          />
          <button
            type="submit"
            className='bg-[#250E4F] text-orange-400 cursor-pointer font-[bold] no-underline p-2.5 rounded-[5px] border-solid border-[#250E4F] font-family: "Kode Mono", monospace hover:bg-orange-400 hover:text-[white] hover:font-[bold] hover:no-underline hover:transition-[color] hover:duration-[0.3s]'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="nav-links">
          <Link to="/Roms" className='button text-red-500 hover:bg-red-500 hover:text-[white] hover:border-red-500'>ROMs</Link>
          <Link to="/Emulator" className='button text-green-400 hover:bg-green-400 hover:text-[white] hover:border-green-400'>EMULATORS</Link>
          {username ? (
            <>
              <span className='text-sky-500 bg-[#1E0B41] rounded p-1 border border-sky-500'>&nbsp; Profile: {username} &nbsp;</span>
              <button
                className='button text-yellow-500 hover:bg-yellow-500 hover:text-[white] hover:border-yellow-500'
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                className='button text-sky-500 hover:bg-sky-500 hover:text-[white] hover:border-sky-500'
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className='button text-yellow-500 hover:bg-yellow-500 hover:text-[white] hover:border-yellow-500'
                onClick={() => navigate('/register')}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </header>*/
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="Logo" className='hidden md:block w-8 h-8 lg:w-14 lg:h-14'/>
          <span className='logo-text'>RePlay</span>
        </div>
      </Link>
      
      <ul className="navbar-links">
        <li>
          <Link to="/Roms" className="roms">
            ROMS
          </Link>
        </li>
        <li>
          <Link to="/Emulator" className="emu">
            Emulators
          </Link>
        </li>
        {username ? (
            <>
              <span className='text-sky-500 bg-[#1E0B41] rounded p-1 border border-sky-500'>&nbsp; Profile: {username} &nbsp;</span>
              <button
                className='button text-yellow-500 hover:bg-yellow-500 hover:text-[white] hover:border-yellow-500'
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="login">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="signup">
                  Sign Up
                </Link>
              </li>
            </>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
