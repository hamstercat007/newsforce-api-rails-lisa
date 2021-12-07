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
        setData(myJson);
      });
  };

  const data_filter = data.filter((element) => element.publisher !== 'BBC News');

  useEffect(() => {
    setLoading(true);
    getData();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <SkeletonGrid />}
      {!loading && (
        <>
          <Navigation />
          <Grid container spacing={0}>
            {data_filter &&
              data_filter.length > 0 &&
              data_filter.map((item) => (
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
