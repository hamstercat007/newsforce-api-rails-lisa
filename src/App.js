import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
    <Router>
      <Navigation expanded={expanded} setExpanded={setExpanded} />
        <Routes>
          <Route key={1} path="/" element={<Home expanded={expanded} />} />
          <Route key={2} path="/about" element={<AboutUs />} />
          <Route key={3} path="/signup" element={<SignUp />} />
          <Route key={4} path="/login" element={<LogIn />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
