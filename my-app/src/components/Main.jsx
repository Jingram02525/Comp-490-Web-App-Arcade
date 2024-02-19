import React from 'react';

const Main = () => {
    return (
        <main>
        <section className='text-center mb-[30px]'>
            <h1 className='text-4xl'>Welcome to RePlay</h1>
            <p className='text-lg text-[#555] mb-5'>Explore a world of gaming nostalgia and adventure. RePlay offers a curated collection of classic games and ROMs for various consoles.</p>
            <a href="games.html" className='inline-block bg-[#333] text-white text-center no-underline text-base px-5 py-2.5 rounded-[5px] hover:bg-[#555] button'>Discover Games</a>
            <a href="roms.html" className='inline-block bg-[#333] text-white text-center no-underline text-base px-5 py-2.5 rounded-[5px] hover:bg-[#555] button'>Discover ROMs</a>
        </section>
        <section className='mb-[30px]'>
            <h2 className='text-2xl mb-2.5'>About RePlay</h2>
            <p className='text-base text-[#555]'>RePlay is your one-stop destination for reliving the magic of classic games. Whether you're a fan of retro titles or seeking nostalgic experiences, we've got you covered. Browse our extensive library of games and ROMs, spanning multiple gaming consoles, and embark on a journey through gaming history.</p>
        </section>
        <section className='mb-[30px]'>
            <h2 className='text-2xl mb-2.5'>Features</h2>
            <ul className='text-base text-[#555] p-0 list-style: none;'>
                <li className='mb-2.5'>Explore a diverse collection of classic games.</li>
                <li className='mb-2.5'>Discover ROMs for various gaming consoles.</li>
                <li className='mb-2.5'>Relive the nostalgia of iconic characters and adventures.</li>
                <li className='mb-2.5'>User-friendly interface for seamless navigation.</li>
                <li className='mb-2.5'>Create an account to personalize your gaming experience.</li>
            </ul>
        </section>
    </main>
    );
}

export default Main;