import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

import { signup } from "../../configs/firebase";
const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e)=>{
  e.preventDefault()
  if(currState === 'Sign Up'){
    signup(userName,email,password)
    
  }
  }
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            type="text"
            placeholder="username"
            className="form-input"
            required
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        ) : null}
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          className="form-input"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account
              <span onClick={() => setCurrState("Sign Up")}>click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
