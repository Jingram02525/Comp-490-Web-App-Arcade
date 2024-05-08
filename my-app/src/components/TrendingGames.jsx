import React, { useEffect, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

const TrendingGames = ({ gameList }) => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (name, index) => {
        navigator.clipboard.writeText(name);
        setCopiedIndex(index);
        setTimeout(() => {
            setCopiedIndex(null);
        }, 2000); // Reset copiedIndex state after 2 seconds
    };

    useEffect(() => {
        console.log(gameList);
    }, []);

    return (
        <div className="mt-5 hidden md:block">
            <h2 className="font-bold text-2xl dark:text-white">Trending Games</h2>
            <div className="hidden md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-5">
                {gameList.map((item, index) => index < 4 && (
                    <div key={index} className="bg-[#76a8f75e] rounded-lg p-2 pt-0 pl-0 pr-0 group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                        <img src={item.background_image} className="h-[270px] rounded-lg object-cover" alt="Game Cover" />
                        <h2 className="dark:text-white text-lg font-bold flex items-center">
                            {item.name}
                            <FaRegCopy
                                className="ml-2 cursor-pointer"
                                onClick={() => handleCopy(item.name, index)}
                                title="Copy"
                            />
                            {copiedIndex === index && <span className="ml-2 text-green-500">Copied!</span>}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingGames;
