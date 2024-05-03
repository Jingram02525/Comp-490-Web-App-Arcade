import axios from "axios";

const key="b179d9e47daa4a9489276614fec88ef8"
const axiosCreate= axios.create({
    baseURL:'https://api.rawg.io/api'
})
//Doc => https://api.rawg.io/docs/
const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
//Fixed: bug forgot to pass key and id
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id);

export default { getGenreList, getAllGames, getGameListByGenreId }