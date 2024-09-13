import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import SignUpForm from './components/Authentication/signup/signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
       
      </Routes>
    </Router>
  );
}

export default App;
