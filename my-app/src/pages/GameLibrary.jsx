import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import {ThemeContext } from "../Context/ThemeContext";
import  GamesHome from "./GamesHome";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const GameLibrary = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('dark');
  useEffect(()=>{
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
  }, [])
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={`${theme} ${theme == 'dark'? 'bg-[#100525] min-h-[100vh]': 'bg-slate-200 min-h-[100vh]'}`}>
      <NavBar/>
      <Header />
      <GamesHome />
      <Footer/>
    </div>
    </ThemeContext.Provider>
  )
}

export default GameLibrary