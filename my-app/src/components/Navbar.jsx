import React from 'react';

const Navbar = () => {
    return(
    <header className='w-full z-10 bg-blue-950 opacity-90' text-white p-5>
      <nav className='flex justify-between items-center'>
        <div className='text-2xl no-underline text-white font-bold'>
          <a href="index.html" >RePlay</a>
        </div>
        <div className='flex items-center justify-center mt-2.5;'>
          <input type="text" placeholder="Search" className='text-base p-2.5 rounded-[5px] border-[none];'/>
          <button type="submit" className='bg-[#555] text-white cursor-pointer p-2.5 rounded-[5px] border-[none];'>Search</button>
        </div>
        <ul className='flex list-style: none;'>
          <li className='mr-8;'><a href="roms.html" className='no-underline text-white font-bold transition-[color] duration-[0.3s] hover:text-[#ddd] active:text-[#ddd] visited:underline;'>ROMs</a></li>
          <li className='mr-5;'><a href="games.html" className='no-underline text-white font-bold transition-[color] duration-[0.3s] hover:text-[#ddd] active:text-[#ddd] visited:underline;'>Games</a></li>
          <li className='mr-5;'><a href="login.html" className='no-underline text-white font-bold transition-[color] duration-[0.3s] hover:text-[#ddd] active:text-[#ddd] visited:underline;'>Login</a></li>
          <li className='mr-5;'><a href="register.html" className='no-underline text-white font-bold transition-[color] duration-[0.3s] hover:text-[#ddd] active:text-[#ddd] visited:underline;'>Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};
    
export default Navbar;
