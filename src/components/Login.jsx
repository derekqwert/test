import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUsername } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (inputValue.trim()) {
      setUsername(inputValue);
      navigate("/store");
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to Sagnik Store</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="username-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
