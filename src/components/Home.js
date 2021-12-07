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

  const [searchInput, setSearchInput] = useState('');

  const [filteredResults, setFilteredResults] = useState([]);

  const [toggleList, setToggleList] = useState(['BBC News', 'Al Jazeera', 'Associated Press']);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = data.filter((item) => {
        return Object.values(item.publisher).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const handleToggle = (inputValue) => {
    const filt = toggleList.includes(inputValue) ? toggleList.filter((item) => item !== inputValue) : toggleList.concat(inputValue);
    setToggleList(filt);
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
          <Navigation
            searchBar={<TextField id="standard-basic" label="Search..." variant="standard" onChange={(e) => searchItems(e.target.value)} />}
          />
          <div className="flex-row">
            <FormControlLabel control={<Switch defaultChecked />} label="Africa" />
            <FormControlLabel control={<Switch defaultChecked />} label="Asia" />
            <FormControlLabel control={<Switch defaultChecked />} label="Europe" />
            <FormControlLabel control={<Switch defaultChecked />} label="North America" />
            <FormControlLabel control={<Switch defaultChecked />} label="South America" />
            <FormControlLabel control={<Switch defaultChecked onChange={(e) => handleToggle('Al Jazeera')} />} label="Al Jazeera" />
            <FormControlLabel control={<Switch defaultChecked onChange={(e) => handleToggle('Associated Press')} />} label="Associated Press" />
            <FormControlLabel control={<Switch defaultChecked onChange={(e) => handleToggle('BBC News')} />} label="BBC News" />
          </div>
          <h4>ToggleList = {toggleList}</h4>
          <Grid container spacing={0}>
            {searchInput.length > 1
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
                      tag_list={item.tag_list}
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
                      tag_list={item.tag_list}
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
