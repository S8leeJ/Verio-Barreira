import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './homePage';

function App() {
  return (
    <Router>
      {/* <Navigation />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/contact" element={Contact} />
      </Routes> */}
        <HomePage />

  </Router>
  );
  }
  
  function Home() {
  return <h1>Home</h1>;
  
  }
  
  function About() {
  return <h1>About</h1>;
  }
  
  function Contact() {
  return <h1>Contact</h1>;
  }

export default App;