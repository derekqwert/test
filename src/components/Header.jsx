import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import "../styles/Header.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUsername("");
    navigate("/");
  };

  return (
    <div className="header-container">
      <span className="username">username: {username}</span>
      <Button className="logout-btn" variant="danger" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
};

export default Header;
