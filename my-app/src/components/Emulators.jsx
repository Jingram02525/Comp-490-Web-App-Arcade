import React from 'react';
import "../styles/emulators.css";
const Emulators = () => {
  return (
    <main className="emulators">
  <h1>Emulators</h1>
  <section className="console-list">
    <div className="slider-container">
      <div className="console-container">
        <a href="atari.html" className="console fade-in">
          <img
            src="https://cdn.glitch.global/eb825b2f-ea69-4be8-aa63-254ae198de2e/atari-2600.webp?v=1713179083801"
            alt="Atari Logo"
          />
          <h2>Atari</h2>
        </a>
        <a href="gameboy-advance.html" className="console fade-in">
          <img
            src="https://cdn.glitch.global/eb825b2f-ea69-4be8-aa63-254ae198de2e/gameboy-advance.webp?v=1701984036704"
            alt="GameBoy Advance Logo"
          />
          <h2>Gameboy Advance</h2>
        </a>
        <a href="gameboy.html" className="console fade-in">
          <img
            src="https://cdn.glitch.global/eb825b2f-ea69-4be8-aa63-254ae198de2e/gameboy.webp?v=1713179090781"
            alt="GameBoy Logo"
          />
          <h2>Gameboy</h2>
        </a>
        {/* Add more console entries here */}
      </div>
    </div>
  </section>
</main>

  );
}

export default Emulators;
