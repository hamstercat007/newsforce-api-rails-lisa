import React from 'react';
import NewsCard from './NewsCard';
import Grid from '@mui/material/Grid';
import SkeletonGrid from './SkeletonGrid';

const Home = ({ toggleList, filteredResults, data, loading }) => {
  return (
    <div className="App">
      {loading && (
        <Grid container spacing={0}>
          <SkeletonGrid />
        </Grid>
      )}
      {!loading && (
        <>
          <Grid container spacing={0}>
            {toggleList.length < 9
              ? filteredResults &&
                filteredResults.length > 0 &&
                filteredResults.map((item) => (
                  <Grid item key={item.id} xs={12} sm={12} md={5} wrap={'wrap'}>
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
                  <Grid item key={item.id} xs={12} sm={12} md={5}>
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
