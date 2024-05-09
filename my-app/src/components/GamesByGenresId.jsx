import React, { useEffect, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

const GamesByGenresId = ({ gameList, selectedGenresName }) => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (name, index) => {
        navigator.clipboard.writeText(name);
        setCopiedIndex(index);
        setTimeout(() => {
            setCopiedIndex(null);
        }, 2000); // Reset copiedIndex state after 2 seconds
    };

    useEffect(() => {
        console.log('GamesList', gameList);
    }, []);

    return (
        <div>
            <h2 className="font-bold text-2xl dark:text-white mt-5">{selectedGenresName} Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {gameList.map((item, index) => (
                    <div key={index} className="bg-[#76a8f75e] p-3 pl-2 pr-2 rounded-lg pb-12 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
                        {/* Set fixed dimensions for the image container */}
                        <div className="w-full h-48 overflow-hidden rounded-xl">
                            <img
                                src={item.background_image}
                                alt="background image"
                                className="w-full h-full object-fit rounded-xl"
                            />
                        </div>
                        <h2 className="text-lg dark:text-white font-bold flex items-center">
                            {item.name}
                            <FaRegCopy
                                className="ml-2 cursor-pointer"
                                onClick={() => handleCopy(item.name, index)}
                                title="Copy"
                            />
                            {copiedIndex === index && <span className="ml-2 text-green-500">Copied!</span>}
                        </h2>
                        <h2 className="text-gray-500 dark:text-gray-200">⭐{item.rating}  💬{item.reviews_count}  🔥{item.suggestions_count}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamesByGenresId;
