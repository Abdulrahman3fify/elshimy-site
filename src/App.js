import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ServiceDetail from "./components/ServiceDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:serviceKey" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
