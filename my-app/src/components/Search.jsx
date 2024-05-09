import React, { useState } from 'react'
import Results from './Results'
import { HiOutlineMagnifyingGlass} from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [gameResults, setGameResults] = useState([])
    const navigate = useNavigate();

    const key = "b179d9e47daa4a9489276614fec88ef8";
    const baseURL = "https://api.rawg.io/api";
    const axiosInstance = axios.create({
    baseURL,
    params: { key }
    });

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

//SEARCH FEATURE GOES HERE
    const onSubmit = (e) => {
        e.preventDefault();
        let slug = searchTerm.split(' ').join('-').toLowerCase();
    
        setGameResults([]);
        axiosInstance.get("/games", { params: { search: slug } })
          .then(({ data }) => {
            if (data.results === undefined) {
              alert('No games found');
            } else {
              setGameResults(data.results);
              //Navigate to results component
              navigate('/searchResult', { state:{gameResults: data.results}})
            }
          })
          .catch(error => {
            console.error("Error fetching games:", error);
            alert("An error occurred while fetching games. Please try again later.");
          });

        setSearchTerm("");
    };
//SEARCH FEATURE END

  return (
    <div className='game-search'>
        <form onSubmit={onSubmit}>
          <div className='flex items-center p-3'>
            <div className='flex flex-grow bg-slate-300 p-2 w-full
            mx-5 rounded-full items-center'>
                <HiOutlineMagnifyingGlass/>
                  <input type='text' placeholder='Search Games...' value={searchTerm} onChange={handleChange} className='px-2 bg-transparent outline-none flex-1'/>
              <input type="submit" placeholder='Submit'/>
            </div>
          </div>
        </form>
        {/* <Results gameResults={gameResults} /> */}
    </div>
  )
}

export default Search