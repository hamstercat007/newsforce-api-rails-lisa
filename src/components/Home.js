import React from 'react';
import NewsCard from './NewsCard';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import SkeletonGrid from './SkeletonGrid';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import TagCloud from './TagCloud';

const Home = ({ expanded }) => {
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
    <div className="App">
      {loading && (
        <Grid container spacing={0}>
          <SkeletonGrid />
        </Grid>
      )}
      {!loading && (
        <>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider light />
            <div className="flex-row">
              <TagCloud handleToggle={handleToggle} />
            </div>
          </Collapse>
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
