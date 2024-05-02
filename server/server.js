const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get('/api', (req, res) => {
    res.json({message:"Hello world!"});
})

/*CREATING NEW USERS */
/*NOTE I WILL CHANGE THIS SO IT WORKS WITH DATABASE */
// Array containt all existing users
const users = [];
const generatedId = () => Math.random().toString(36).substring(2,10);


/*REGISTER AND RETURN RESPONSE TO FRONTEND */
app.post("/api/register", async (req, res) => {
    const { username, password, email } = req.body;
    const id = generatedId();

    //Checks if duplicate, validation
    const result = users.filter(
        (user) => user.username === username && user.password === password
    );

    //returns result of 0 if true
    if(result.length === 0) {
        const newUser = {id, email, password, username };
        //add the new user to database or array in this case
        users.push(newUser);
        //returns a sucess message
        return res.json({
            message: "Account created successfully",
        });
    }

    //If there is an existing user
    res.json({
        error_message: "User already exists",
    })
});


/*LOGIN AND SOME LEVEL OF SECURITY CHECKS */
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    //Checks if the user exists
    let result = users.filter(
        user => user.username === username && user.password === password
    );

    // if user does not exist,
    if(result.length !== 1) {
        return res.json({
            error_message: "Incorrect credentials",
        })
    }

    //If user exists
    res.json({
        message: "Login  successfully",
        id: result[0].id,
    });
});

///RAWG API,
const key = "b179d9e47daa4a9489276614fec88ef8";
const baseURL = "https://api.rawg.io/api";

const getPopularGame = () => {
  return fetch(`${baseURL}/games?key=${key}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching popular games:', error);
    });
};

const getMovieDetails = (id) => {
  return fetch(`${baseURL}/games/${id}/movies?key=${key}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error(`Error fetching movie details for game ID ${id}:`, error);
    });
};

const getGameListByGenreId = (id) => {
  return fetch(`${baseURL}/games?key=${key}&genres=${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error(`Error fetching game list for genre ID ${id}:`, error);
    });
};

//export default {
//  getPopularGame,
//  getMovieDetails,
 // getGameListByGenreId
//};



















app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

