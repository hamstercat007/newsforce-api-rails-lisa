import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route key={1} path="/" element={<Home />} />
          <Route key={2} path="/about" element={<AboutUs />} />
          <Route key={3} path="/signup" element={<SignUp />} />
          <Route key={4} path="/login" element={<LogIn />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
