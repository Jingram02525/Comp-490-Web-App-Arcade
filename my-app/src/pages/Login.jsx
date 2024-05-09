import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/login.css";
import ParticlesComponent from '../components/ParticlesComponent'
const ParticlesComponentMemo = React.memo(ParticlesComponent);

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Create a link element for the font
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Clean up the link when the component unmounts
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, password });
        loginUser();
        setUsername("");
        setPassword("");
    };

    const loginUser = () => {
        fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.error_message) {
                alert(data.error_message);
            } else {
                alert(data.message);
                navigate("/dashboard");
                localStorage.setItem("username", username); // Saving username to localStorage
            }
        })
        .catch((err) => console.error(err));
    };

    return (
      <>
      <div>
      <ParticlesComponentMemo id="particles" />
      </div>
        <Navbar />
        <div className="login-container">
            <main className='container'>
                <h1 className='loginTitle'>Log in</h1>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="loginButton">Sign In</button>
                    <p>
                        Don't have an account? <Link className="rtext" to='/register'>Sign up</Link>
                    </p>
                </form>
            </main>
        </div>
        <Footer />
      </>
    );
}

export default Login;
