import React, { useState } from "react";

const Register = () =>{
    return (
        <main className='register'>
            <h1 className='registerTitle'>Create an account</h1>
            <form className='registerForm' onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    name='username'
                    id='username'
                    required
                />
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    required
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    required
                />
                <button className='registerBtn'>Sign Up</button>
                <p>
                    Already have an account? <Link to='/'>Sign in</Link>
                </p>
            </form>
        </main>
    );
}

export default Register;