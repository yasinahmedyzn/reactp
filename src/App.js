import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/Pages/About";
import Service from "./component/Pages/Service";
import Home from "./component/Pages/Home";
import Navbar from "./component/Header/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Service />} />
        </Routes>
      </Router>
      ;
    </div>
  );
};

export default App;
