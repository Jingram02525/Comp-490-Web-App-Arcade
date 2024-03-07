//import React from 'react'

import axios from 'axios';



const confirmSignUp = document.querySelector('.btn2');



confirmSignUp.addEventListener('click', async function (e) {
  e.preventDefault();

const newFirstname = document.querySelector('.new--firstname');

const formData = {
    firstName: newFirstname.value
   
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
    }); 
  
});