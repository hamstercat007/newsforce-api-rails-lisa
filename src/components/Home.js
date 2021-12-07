import React from 'react';
import NewsCard from './NewsCard';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import SkeletonGrid from './SkeletonGrid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Home = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  // const [searchInput, setSearchInput] = useState('');

  const [filteredResults, setFilteredResults] = useState([]);

  const [toggleList, setToggleList] = useState(['BBC News', 'Al Jazeera English', 'Associated Press', 'Asia', '']);

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //   if (searchInput !== '') {
  //     const filteredData = data.filter((item) => {
  //       return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
  //     });
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(data);
  //   }
  // };

  const handleToggle = (inputValue) => {
    const filt = toggleList.includes(inputValue) ? toggleList.filter((item) => item !== inputValue) : toggleList.concat(inputValue);
    setToggleList(filt);
    const filteredData = data
      .filter((item) => {
        return filt.includes(item.publisher);
      })
      .filter((item) => filt.includes(item.continent));
    console.log(filteredData);
    setFilteredResults(filteredData);
  };

  const getData = () => {
    fetch('sample_data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    setLoading(true);
    getData();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <SkeletonGrid />}
      {!loading && (
        <>
          <Navigation searchBar={<TextField id="standard-basic" label="Search..." variant="standard" />} />
          <div className="flex-row">
            <FormControlLabel control={<Switch defaultChecked />} label="Africa" />
            <FormControlLabel
              control={<Switch defaultChecked value="Asia" onChange={(al_event) => handleToggle(al_event.target.value)} />}
              label="Asia"
            />
            <FormControlLabel control={<Switch defaultChecked />} label="Europe" />
            <FormControlLabel control={<Switch defaultChecked />} label="North America" />
            <FormControlLabel control={<Switch defaultChecked />} label="South America" />
            <FormControlLabel
              control={<Switch defaultChecked value="Al Jazeera English" onChange={(al_event) => handleToggle(al_event.target.value)} />}
              label="Al Jazeera"
            />
            <FormControlLabel
              control={<Switch defaultChecked value="Associated Press" onChange={(ap_event) => handleToggle(ap_event.target.value)} />}
              label="Associated Press"
            />
            <FormControlLabel
              control={<Switch defaultChecked value="BBC News" onChange={(bbc_event) => handleToggle(bbc_event.target.value)} />}
              label="BBC News"
            />
          </div>
          <h4>ToggleList = {toggleList}</h4>
          <Grid container spacing={0}>
            {toggleList.length < 5
              ? filteredResults &&
                filteredResults.length > 0 &&
                filteredResults.map((item) => (
                  <Grid item key={item.id} xs={12} sm={6} md={5}>
                    <NewsCard
                      key={item.id}
                      publisher={item.publisher}
                      publish_date={item.publish_date}
                      image_url={item.image_url}
                      headline={item.headline}
                      sub_headline={item.sub_headline}
                      article_body={item.article_body}
                      src_url={item.source_url}
                      continent={item.continent}
                    />
                  </Grid>
                ))
              : data &&
                data.length > 0 &&
                data.map((item) => (
                  <Grid item key={item.id} xs={12} sm={6} md={5}>
                    <NewsCard
                      key={item.id}
                      publisher={item.publisher}
                      publish_date={item.publish_date}
                      image_url={item.image_url}
                      headline={item.headline}
                      sub_headline={item.sub_headline}
                      article_body={item.article_body}
                      src_url={item.source_url}
                      continent={item.continent}
                    />
                  </Grid>
                ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default Home;
