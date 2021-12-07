import React from 'react';
import NewsCard from './NewsCard';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import SkeletonGrid from './SkeletonGrid';
import TextField from '@mui/material/TextField';

const Home = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
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
    }, 500);
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
