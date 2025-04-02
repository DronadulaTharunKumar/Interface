import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header"; // Import Header
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import MainBody from "./components/MainBody.jsx"; // Corrected file path
import Footer from "./components/Footer"; // Corrected file path

function App() {
  return (
<Router>
    <div>
      <Navbar />
      
      <Header />
      <MainBody />
      <Footer />
      </div>
</Router>
  );
}

export default App;
