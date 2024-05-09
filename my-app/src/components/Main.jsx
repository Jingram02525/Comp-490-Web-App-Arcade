import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <section className="hero">
                <h1>Welcome to RePlay</h1>
                <p>
                Explore a world of gaming nostalgia and adventure. RePlay offers a curated
                collection of classic games and ROMs for various consoles.
                </p>
                <Link to="/Emulator" className="button games2">
                    <b>Discover Emulators</b>
                </Link>
                <Link to="/Roms" className="button roms2">
                    <b>Discover ROMs</b>
                </Link>
            </section>
            <section className="about">
                <h2>About RePlay</h2>
                <p>
                RePlay is your one-stop destination for reliving the magic of classic
                games. Whether you're a fan of retro titles or seeking nostalgic
                experiences, we've got you covered. Browse our extensive library of games
                and ROMs, spanning multiple gaming consoles, and embark on a journey
                through gaming history.
                </p>
            </section>
            <section className="features">
                <h2>Features</h2>
                <ul>
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