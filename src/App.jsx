// frontend/src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PublicBlog from "./pages/PublicBlog";   // agar ye banaya hai
import SinglePost from "./pages/SinglePost";  


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
      {/* Navbar har page pe */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Public blog page */}
          <Route path="/" element={<PublicBlog />} />

          {/* Single post page (optional) */}
          <Route path="/post/:id" element={<SinglePost />} />

          {/* Admin login */}
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

          {/* Admin dashboard (protected) */}
          <Route
            path="/admin"
            element={
              isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />
            }
          />

          {/* Unknown route → redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
