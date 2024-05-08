import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameVideos = ({ gameId, gameName }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.rawg.io/api/games/${gameId}/movies`, {
          params: {
            key: "b179d9e47daa4a9489276614fec88ef8" // Your Rawg API key
          }
        });
        setVideos(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchVideos();

    // Cleanup function to cancel the request if the component unmounts
    return () => {
      // cleanup logic if needed
    };
  }, [gameId]); // Re-run effect when gameId changes

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-white text-3xl font-bold mb-4">Videos</h1>
      <div className='text-white'>
        {videos.length > 0 ? (
          selectedVideo ? (
            <div key={selectedVideo.id} >
              <h2 className='text-white'>{selectedVideo.name}</h2>
              <iframe
                width="560"
                height="315"
                src={selectedVideo.data.max}
                title={selectedVideo.name}
                allow="autoplay; encrypted-media"
                allowFullScreen
                autoplay="0"
              ></iframe>
            </div>
          ) : (
            <div>
              {videos.map((video) => (
                <div key={video.id}>
                  <h3>{video.name}</h3>
                  <button onClick={() => handlePlayVideo(video)}  className="bg-gray-600 text-white">Play</button>
                </div>
              ))}
            </div>
          )
        ) : (
          <div>No videos available</div>
        )}
      </div>
    </div>
  );
};

export default GameVideos;
