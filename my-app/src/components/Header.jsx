import React, { useContext, useState, useEffect } from 'react';
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
import Results from "../components/Results";
import Search from './Search';
import Navbar from './Navbar';

// SEARCH FEATURE GOES HERE
export const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        console.log("theme", theme);
    }, []);

    return (
        <div className="flex items-center justify-between">
            <div className="flex-grow">
                <Search />
            </div>
            <div>
                {theme === 'light' ?
                    <HiMoon
                        className='text-[35px] bg-slate-400 text-black p-1 rounded-full cursor-pointer'
                        onClick={() => { setTheme('dark'); localStorage.setItem('theme', 'dark') }} /> :
                    <HiSun
                        className='text-[35px] bg-slate-400 text-black p-1 rounded-full cursor-pointer'
                        onClick={() => { setTheme('light'); localStorage.setItem('theme', 'light') }} />
                }
            </div>
        </div>
    );
};

export default Header;