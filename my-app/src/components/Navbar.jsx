import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
    <header className='w-full z-10 bg-blue-950 opacity-90' text-white p-5>
      <nav className='flex justify-between items-center'>
        <div className='text-2xl no-underline text-white font-bold'>
          <Link to="/" >RePlay</Link>
        </div>
        <div className='flex items-center justify-center mt-2.5;'>
          <input type="text" placeholder="Search" className='text-base p-2.5 rounded-[5px] border-[none];'/>
          <button type="submit" className='bg-[#555] text-white cursor-pointer p-2.5 rounded-[5px] border-[none];'>Search</button>
        </div>
        <ul className='flex list-style: none;'>
          <li className='mr-8;'><Link to="/api/gamecanvas" className='no-underline text-white font-bold transition-[color] duration-[0.3s] hover:text-[#ddd] active:text-[#ddd] visited:underline;'>GameCanvas</Link></li>
          <li className='mr-5;'><Link to="/api/login" className='no-underline text-white font-bold transition-[color] duration-[0.3s] hover:text-[#ddd] active:text-[#ddd] visited:underline;'>Login</Link></li>
          <li className='mr-5;'><Link to="/api/register"className='no-underline text-white font-bold transition-[color] duration-[0.3s] hover:text-[#ddd] active:text-[#ddd] visited:underline;'>Register</Link></li>
          {/* <li className='mr-5;'><Link to="/api/games" className='no-underline text-white font-bold transition-[color] duration-[0.3s] hover:text-[#ddd] active:text-[#ddd] visited:underline;'></Link></li> */}
        </ul>
      </nav>
    </header>
  );
};
/*
href="roms.html"
href="games.html"
href="login.html"
href="register.html" 
*/


export default Navbar;
