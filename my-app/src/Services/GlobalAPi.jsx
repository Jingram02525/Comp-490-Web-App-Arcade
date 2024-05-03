import axios from "axios";

const key="b179d9e47daa4a9489276614fec88ef8"
const axiosCreate= axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);

export default { getGenreList }