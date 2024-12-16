import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import "../styles/Header.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();
  const [errorTriggered, setErrorTriggered] = useState(false);

  if (errorTriggered) {
    throw new Error("There is an error 👻☠️, but chill... Error Boundary handled it gracefully 🍻");
  }

  const handleLogout = () => {
    setUsername("");
    navigate("/");
  };

  return (
    <div className="header-container">
      <span className="username">username: {username}</span>
      <div>
        <Button
          className="thr-err-btn"
          variant="danger"
          onClick={() => setErrorTriggered(true)}
        >
          Throw Error
        </Button>
        <Button className="logout-btn" variant="danger" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Header;
