import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    return (
        <main className='login'>
            <h1 className='loginTitle'>Log into your account</h1>
            <form className='loginForm' onSubmit={ handleSubmit }>
              <div className='fields'>
                <div className='username'>
                  <label htmlFor='username'>Username</label>
                  <input
                      type='text'
                      name='username'
                      id='username'
                      required
                  />
                </div>
                <div className='password'>
                  <label htmlFor='password'>Password</label>
                  <input
                      type='password'
                      name='password'
                      id='password'
                      required
                  />
                </div>
              </div>
                <button className="loginBtn">Sign In</button>
                <p>
                    Don't have an account? <Link to='/register'>Sign up</Link>
                </p>
            </form>
        </main>
    );
}

export default Login;