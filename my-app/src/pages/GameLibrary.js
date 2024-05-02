import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import {ThemeContext } from "../Context/ThemeContext";
import  GamesHome from "../pages/GamesHome";
import NavBar from "../components/Navbar";

const GameLibrary = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('dark');
  useEffect(()=>{
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
  }, [])
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={`${theme} ${theme == 'dark'? 'bg-[#121212] h-[100vh]': 'bg-white'}`}>
      <NavBar/>
      <Header />
      <GamesHome />
    </div>
    </ThemeContext.Provider>
  )
}

export default GameLibrary