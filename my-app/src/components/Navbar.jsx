import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Handle Link logic here
  const handleSearch = (event) => {
    event.preventDefault();
    
    console.log('Performing search...');
  };

  return (
    <header className='bg-[#1E0B41] text-white p-5'>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
