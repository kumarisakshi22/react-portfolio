import React from 'react';
import "./index.css"
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Certi from './routes/Certi';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certi" element={<Certi />} />

      </Routes>
    </>
  );
}

export default App;
