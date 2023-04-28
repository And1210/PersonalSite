import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar.js';
import Home from './pages/Home.js';
import Timeline from './pages/Timeline.js';
import Education from './pages/Education.js';
import Projects from './pages/Projects.js';
import Skills from './pages/Skills.js';
import Interests from './pages/Interests.js';

import './App.css';

function App() {
// <Route path="/gallery" element={<Gallery />} />
  return (
    <div className="App">
      <Router>
        <div className="body-container">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/timeline" exact element={<Timeline />} />
            <Route path="/education" exact element={<Education />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/skills" exact element={<Skills />} />
            <Route path="/interests" exact element={<Interests />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
