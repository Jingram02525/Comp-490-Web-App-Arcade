



document.getElementById('loginButton').addEventListener('click', handleLogin);

function handleLogin(e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get username and password from textboxes
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a request to the server for authentication
    axios.post('http://localhost:8000/login', {
        username: username,
        password: password
    })
    .then(response => {
        // Handle successful login
        console.log('Login successful:', response.data);
        // Optionally redirect the user or update the UI/state
    })
    .catch(error => {
        // Handle login error
        
        // Optionally inform the user of the error
        console.error('Login error:', error);
        const errorMessageElement = document.getElementById("passErrorMessage");
        errorMessageElement.innerText = "Incorrect Password!";
        errorMessageElement.style.color = "red";
    });
}




// Attach event listener to login button
