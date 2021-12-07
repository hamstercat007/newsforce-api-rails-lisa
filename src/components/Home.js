import React from 'react';
import NewsCard from './NewsCard';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import SkeletonGrid from './SkeletonGrid';
const Home = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

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

  const filtPubs = ['BBC News'];
  const filtConts = ['ASIA'];

  const continentMatch = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          return true;
        }
      }
    }
    return false;
  };

  const pub_data = data.filter((item) => !filtPubs.includes(item.publisher));

  const filtered_data = pub_data.filter((item) => !continentMatch(item.tag_list, filtConts));

  return (
    <div className="App">
      {loading && <SkeletonGrid />}
      {!loading && (
        <>
          <Navigation />
          <Grid container spacing={0}>
            {filtered_data &&
              filtered_data.length > 0 &&
              filtered_data.map((item) => (
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
