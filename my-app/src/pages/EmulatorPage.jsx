import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Emulators from '../components/Emulators'

const EmulatorPage = () => {
    return (
        <>
        <Navbar />
        <Emulators />
        <Footer/>
        </>
    );
};

export default EmulatorPage;

/*
<main>
<h1>Emulator</h1>
<section className="console-list">
    <button className="console">
        <img src="https://cdn.glitch.global/eb825b2f-ea69-4be8-aa63-254ae198de2e/playstation-portable.png?v=1701983528585" alt="PSP Logo" />
        <h2>PlayStation Portable (PSP)</h2>
    </button>
    <button className="console">
        <img src="https://cdn.glitch.global/eb825b2f-ea69-4be8-aa63-254ae198de2e/gameboy-advance.webp?v=1701984036704" alt="GameBoy Logo" />
        <h2>GameBoy Advance</h2>
    </button>
    <button className="console">
        <img src="https://cdn.glitch.global/eb825b2f-ea69-4be8-aa63-254ae198de2e/playstation-2.png?v=1701984235389" alt="PS2 Logo" />
        <h2>PlayStation 2 (PS2)</h2>
    </button>
   
*/