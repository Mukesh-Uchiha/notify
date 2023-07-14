import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import Home from "./Home";
import "../scss/LoginForm.scss";
import "../css/style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm className="LoginForm" />} />
        <Route path="/home" element={<Home className="Home" />} />
        <Route path="/google" element={"https://www.instagram.com/"} />
      </Routes>
    </Router>
  );
}

export default App;
