import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticlesComponent from '../components/ParticlesComponent2';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errors, setErrors] = useState({ username: '', email: '', password: '' });

    const clearErrors = () => setErrors({ username: '', email: '', password: '' });

    useEffect(() => {
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
        return () => {
            document.head.removeChild(fontLink);
        };
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isAgreed) {
            setErrorMessage("You must agree to the terms and conditions.");
            return;
        }
        signUp();
    };

    const signUp = () => {
        fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json" },
        })
        .then(res => {
            if (!res.ok) {
                // Handle different error statuses
                return res.json().then(data => Promise.reject({
                    status: res.status,
                    field: data.field, // This field should be 'username' or 'email' as set by your server
                    message: data.message
                }));
            }
            return res.json();
        })
        .then(data => {
            alert("Account created successfully!");
            navigate('/login'); // Redirect after successful registration
        })
        .catch(err => {
            console.error(err);
            // Update the state to reflect the error message for the specific field
            if (err.field) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    [err.field]: err.message
                }));
            } else {
                setErrorMessage("An unexpected error occurred."); // General error handling if no specific field is mentioned
            }
        });
    };

    return (
        <>
            <Navbar />
            {/* <ParticlesComponent id="particles" /> */}
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
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setErrors(prev => ({ ...prev, username: '' })); 
                        }}
                    />
                    {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        required
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors(prev => ({ ...prev, email: '' })); 
                        }}
                    />
                    {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="terms">
                        <input
                            type="checkbox"
                            className="termsbox"
                            id="terms"
                            checked={isAgreed}
                            onChange={(e) => setIsAgreed(e.target.checked)}
                            required
                        />
                        By clicking on the checkbox you agree to the <Link to="/terms">Terms and Conditions</Link>
                    </div>
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
