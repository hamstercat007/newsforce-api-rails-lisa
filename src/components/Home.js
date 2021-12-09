import React from 'react';
import NewsCard from './NewsCard';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import SkeletonGrid from './SkeletonGrid';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import TagCloud from './TagCloud';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { blue } from '@mui/material/colors';

const Home = ({ expanded }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(3);

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
    fetch(`https://newsforce-api.herokuapp.com/?page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(data.concat(myJson.data));
        setPage(page + 1);
        setLastPage(myJson.pagy.last);
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
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && (
        <Grid container spacing={0}>
          <SkeletonGrid />
        </Grid>
      )}
      {!loading && data && data.length > 0 && (
        <>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider light />
            <div className="flex-row">
              <TagCloud handleToggle={handleToggle} />
            </div>
          </Collapse>
          <InfiniteScroll
            dataLength={data.length} //This is important field to render the next data
            next={getData}
            hasMore={page <= lastPage}
            loader={<h4>Loading...</h4>}
            endMessage={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FontAwesomeIcon icon={faReact} style={{ color: blue[500], marginRight: '0.3em' }} className="spinner"></FontAwesomeIcon>
                <h2>Enter the React Hall of Fame</h2>
                <FontAwesomeIcon
                  icon={faReact}
                  style={{
                    color: blue[500],
                    marginLeft: '0.3em',
                  }}
                  className="spinner"
                ></FontAwesomeIcon>
              </div>
            }
          >
            <Grid container spacing={0}>
              {toggleList.length < 9
                ? filteredResults.map((item) => (
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
                : data.map((item) => (
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
          </InfiniteScroll>
        </>
      )}
    </div>
  );
};

export default Home;
