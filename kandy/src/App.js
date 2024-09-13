import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import SignUpForm from './components/Authentication/signup/signup';
import About from './components/About/about';
import services from './components/services/services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<services />} />
      </Routes>
    </Router>
  );
}

export default App;
