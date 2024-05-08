import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import "../styles/signup.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticlesComponent from '../components/ParticlesComponent'


const Register = () =>{
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    useEffect(() => {
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        return () => {
            document.head.removeChild(fontLink);
        };
    }, []);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, password });
        signUp();
        setEmail("");
        setUsername("");
        setPassword("");
    };

    const navigate = useNavigate();

    const signUp = () => {
        fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ email, password, username }),
            headers: { "Content-Type": "application/json" },
        })
        .then(res => res.json())
        .then(data => {
            if (data.error_message) {
                alert(data.error_message);
            } else {
                alert("Account created successfully!");
               
            }
        })
        .catch(err => console.error(err));
    };


    return (
        <>
        <Navbar />
        <ParticlesComponent id="particles"/>
        <main className='register'>
            
            <form className='registerForm' onSubmit={handleSubmit}>
                <h1 className='registerTitle'>Sign up!</h1>
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    name='username'
                    id='username'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='registerBtn'>Sign Up</button>
                <p>
                    Already have an account? <Link to='/login'>Sign in</Link>
                </p>
            </form>
        </main>
        <Footer />
    </>
    );
}

export default Register;