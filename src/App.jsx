// frontend/src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PublicBlog from "./pages/PublicBlog";
import SinglePost from "./pages/SinglePost";
import Resources from "./pages/Resources";
import Portfolio from "./pages/Portfolio";


function App() {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));

  const handleLogin = (newToken) => {
    localStorage.setItem("adminToken", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
  };

  const isLoggedIn = !!token;

  return (
    <Router>
      {/* Navbar on all pages */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      {/* ROUTES */}
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<PublicBlog />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/portfolio" element={<Portfolio />} />


        {/* Auth */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/admin" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        {/* Protected Admin */}
        <Route
          path="/admin"
          element={
            isLoggedIn ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
