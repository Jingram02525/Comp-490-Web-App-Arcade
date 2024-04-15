import React from 'react';

const Main = () => {
    return (
        <main className='max-w-[1200px] mx-auto my-0 p-5'>
            <section className='text-center mb-[30px];'>
                <h1 className='text-4xl text-white'>Welcome to RePlay</h1>
                <p className='text-lg text-white mb-5'>Explore a world of gaming nostalgia and adventure. RePlay offers a curated collection of classic games and ROMs for various consoles.</p>
                <a href="games.html" class='button games2'><b>Discover Games</b></a>
                <a href="roms.html" class="button roms2"><b>Discover ROMs</b></a>
            </section>
            <section class="about">
                <h2>About RePlay</h2>
                <p>RePlay is your one-stop destination for reliving the magic of classic games. Whether you're a fan of retro titles or seeking nostalgic experiences, we've got you covered. Browse our extensive library of games and ROMs, spanning multiple gaming consoles, and embark on a journey through gaming history.</p>
            </section>
            <section class="features">
                <h2>Features</h2>
                <ul className='p-0 list-style: none'>
                    <li>Explore a diverse collection of classic games.</li>
                    <li>Discover ROMs for various gaming consoles.</li>
                    <li>Relive the nostalgia of iconic characters and adventures.</li>
                    <li>User-friendly interface for seamless navigation.</li>
                    <li>Create an account to personalize your gaming experience.</li>
                </ul>
            </section>
        </main>
    );
}

export default Main;