//import React from 'react'

import axios from 'axios';



const confirmSignUp = document.querySelector('.btn2');



confirmSignUp.addEventListener('click', async function (e) {
  e.preventDefault();

const newFirstname = document.querySelector('.new--firstname');
const newLastname = document.querySelector('.new--lastname');
const newUsername = document.querySelector('.new--username');
const newEmail = document.querySelector('.new--email');
const newpassword = document.querySelector('.new--password');


const formData = {
  email: newEmail.value,
  userName: newUsername.value,
  firstName: newFirstname.value,
  lastName: newLastname.value, 
  
  
  password: newpassword.value
    // Add other form field values as needed
  };



  //firstName = newFirstname.data;
  //alert(newFirstname.value);
  //Check for Unmatching password can be done here without accessing DB --> if it fails return alert and delete entries
  axios.post('http://localhost:8000/signup', formData)
    .then(response => {
        console.log('Server response:', response.data);
    })
    .catch(error => {
        console.error('There was an error making the request:', error);
        if (error.response.status === 400) {
          const errorMessage = "Username or email is already taken. Please choose a different username or email.";
          // Display the error message in red text below the textbox
          const errorMessageElement = document.getElementById("error-message");
          errorMessageElement.innerText = errorMessage;
          errorMessageElement.style.color = "red";
      }
    }); 
  
});