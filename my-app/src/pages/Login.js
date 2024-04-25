import React, { useState } from 'react';
import axios from 'axios';
import 'Login.css';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });
            console.log('Login successful:', response.data);
            // Additional actions based on success (e.g., redirect)
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : 'No response');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="username" id="username" name="username" required
                           value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="password" id="password" name="password" required
                           value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="loginButton">Login</button>
            </form>
        </div>
    );
}
