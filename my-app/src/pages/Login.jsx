import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    //note: that e stands for an event, react returns a promise for the event
    const handleSubmit = (e) => {
      e.preventDefault();
      //For testing purposes
      console.log({ username, password});
      loginUser();
      setUsername("");
      setPassword("");
    }
    //React Router's uses this to nagivate to path's
    const navigate = useNavigate();

    const loginUser = () => {
      //Sending to server in a json format
      fetch("http://localhost:8000/api/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),

        headers: {
          "Content-Type": "application/json",
        },

      })
        .then((res) => res.json())
        .then((data) => {
          if(data.error_message){
            alert(data.error_message);
          } else {
            alert(data.message);
            navigate("/dashboard");
            localStorage.setItem("_id", data.id); 
          }
        })
        .catch((err) => console.error(err));
    }


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
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className='password'>
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