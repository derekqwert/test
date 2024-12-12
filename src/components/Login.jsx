import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUsername } = useContext(UserContext);
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (inputUsername === storedUser && inputPassword === storedPass) {
      setUsername(inputUsername);
      navigate("/store");
    } else {
      alert("Invalid username or password.");
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  }

  return (
    <div className="login-container">
      <h2 className="heading">Login</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
        className="username-input"
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        className="password-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      <button onClick={handleSignUp} className="login-button">
        Sign Up
      </button>
    </div>
  );
};

export default Login;
