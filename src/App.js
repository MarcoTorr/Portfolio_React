import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Aboutme from './pages/aboutme';
import Contact from './pages/contact';
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";


function App() {
  return (
    <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <Nav />
      <div className="container">
        <Routes>
        <Route path="/Portfolio_React" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
    <Footer />
    </Router>
)}

export default App;
