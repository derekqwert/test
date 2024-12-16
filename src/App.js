import React, { useContext } from "react";
import { UserProvider, UserContext } from "./contexts/UserContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Store from "./components/Store";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./utils/Errorboundry";

function App() {
  return (
    <ErrorBoundary>
      <UserProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/store"
                element={
                  <ProtectedRoute>
                    <Store />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </ErrorBoundary>
  );
}

const ProtectedRoute = ({ children }) => {
  const { username } = useContext(UserContext);

  if (!username) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default App;
