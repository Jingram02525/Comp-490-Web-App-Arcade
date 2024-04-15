import React from 'react';

const Navbar = () => {
    return(
      <header className='bg-[#1E0B41] text-white p-5'>
      <nav className='flex justify-between items-center'>
        <div>
          <a href="index.html" className='text-2xl no-underline text-white font-bold'>RePlay</a>
        </div>
        <div className='flex items-center justify-center mt-2 no-underline'>
          <input type="text" placeholder="ROMs, Games, etc,..." 
          className='p-2.5 rounded text-base bg-[#250E4F] text-white mr-2.5 no-underline border-[#250E4F]'/>
          <button type="submit"className='bg-[#250E4F] text-orange-400 cursor-pointer font-[bold] 
          no-underline p-2.5 rounded-[5px] border-solid border-[#250E4F] 
          font-family: "Kode Mono", monospace hover:bg-orange-400 
          hover:text-[white] hover:font-[bold] hover:no-underline hover:transition-[color] 
          hover:duration-[0.3s]'>Search</button>
        </div>
        <div className="nav-links">
        <a href="roms.html" className='button text-red-500 border-bottom-style: solid
         hover:bg-red-500 hover:text-[white] hover: border-red-500'>ROMs</a>
          <a href="games.html" className='button text-green-400 border-bottom-style: solid
         hover:bg-green-400 hover:text-[white] hover: border-green-400'> Games</a>
          <a href="login.html" className='button text-sky-500 border-bottom-style: solid
         hover:bg-sky-500 hover:text-[white] hover: border-sky-500'>Login</a>
          <a href="register.html" className='button text-yellow-500 border-style: solid
         hover:bg-yellow-500 hover:text-[white] hover: border-yellow-500'>Sign Up</a>
        </div>
      </nav>
    </header>
  );
};
    
export default Navbar;
