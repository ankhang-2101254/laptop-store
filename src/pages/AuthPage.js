import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthPage = () => {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </Router>
  );
};

export default AuthPage;
