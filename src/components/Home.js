import React from 'react';
import NewsCard from './NewsCard';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
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
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Grid container spacing={0}>
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} style={{ minWidth: '350px' }}>
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
    </div>
  );
};

export default Home;
