import React from 'react';

const Emulators = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-green-500 mb-8">Emulators</h1>
      <section className="flex flex-wrap justify-center">
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="inline-flex">
            <a href="atari.html" className="console fade-in bg-white text-green-500 rounded-lg shadow-md m-4 p-8 min-w-max block hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer hover:bg-green-500 hover:text-white">
              <img src="https://cdn.glitch.global/eb825b2f-ea69-4be8-aa63-254ae198de2e/atari-2600.webp?v=1713179083801" alt="Atari Logo" className="max-w-full h-auto mb-4 bg-white hover:scale-110 transition-all ease-in-out duration-300" />
              <h1 className="text-xl font-bold mb-4 hover:text-white transition-all ease-in-out duration-300">Atari</h1>
            </a>
            <a href="gameboy-advance.html" className="console fade-in bg-white text-green-500 rounded-lg shadow-md m-4 p-8 min-w-max block hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer hover:bg-green-500 hover:text-white">
              <img src="https://cdn.glitch.global/eb825b2f-ea69-4be8-aa63-254ae198de2e/gameboy-advance.webp?v=1701984036704" alt="GameBoy Advance Logo" className="max-w-full h-auto mb-4 bg-white hover:scale-110 transition-all ease-in-out duration-300" />
              <h1 className="text-xl font-bold mb-4 hover:text-white transition-all ease-in-out duration-300">Gameboy Advance</h1>
            </a>
            <a href="gameboy.html" className="console fade-in bg-white text-green-500 rounded-lg shadow-md m-4 p-8 min-w-max hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer hover:bg-green-500 hover:text-white">
              <img src="https://cdn.glitch.global/eb825b2f-ea69-4be8-aa63-254ae198de2e/gameboy.webp?v=1713179090781" alt="GameBoy Logo" className="max-w-full h-auto mb-4 bg-white hover:scale-110 transition-all ease-in-out duration-300" />
              <h1 className="text-xl font-bold mb-4 hover:text-white transition-all ease-in-out duration-300">Gameboy</h1>
            </a>
            {/* Add more console entries here */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Emulators;
