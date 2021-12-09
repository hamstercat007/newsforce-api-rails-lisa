import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  const [expanded, setExpanded] = React.useState(false);

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [filteredResults, setFilteredResults] = useState([]);

  const [toggleList, setToggleList] = useState([
    'BBC News',
    'Al Jazeera English',
    'Associated Press',
    'asia',
    'europe',
    'north-america',
    'middle-east',
    'south-america',
    'africa',
  ]);

  const handleToggle = (inputValue) => {
    updateMapFill(inputValue);
    const filt = toggleList.includes(inputValue) ? toggleList.filter((item) => item !== inputValue) : toggleList.concat(inputValue);
    setToggleList(filt);
    const filteredData = data
      .filter((item) => {
        return filt.includes(item.publisher);
      })
      .filter((item) => filt.some((r) => item.tag_list.includes(r)));
    setFilteredResults(filteredData);
  };

  const getData = () => {
    fetch('https://newsforce-api.herokuapp.com/index', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let slicedData = myJson.slice(0, 70);
        setData(slicedData);
      });
  };

  const updateMapFill = (item) => {
    let continent = document.getElementsByClassName(item);
    [].forEach.call(continent, function (cont) {
      cont.style.fill === 'rgb(195, 195, 195)' ? (cont.style.fill = 'rgb(0, 0, 0)') : (cont.style.fill = 'rgb(195, 195, 195)');
    });
  };

  useEffect(() => {
    setLoading(true);
    getData();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <Navigation expanded={expanded} handleToggle={handleToggle} setExpanded={setExpanded} />
        <Routes>
          <Route
            key={1}
            path="/"
            element={<Home expanded={expanded} toggleList={toggleList} filteredResults={filteredResults} data={data} loading={loading} />}
          />
          <Route key={2} path="/about" element={<AboutUs />} />
          <Route key={3} path="/signup" element={<SignUp />} />
          <Route key={4} path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
