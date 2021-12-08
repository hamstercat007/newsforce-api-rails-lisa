import React from "react";
import NewsCard from "./NewsCard";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import SkeletonCard from "./SkeletonCard";
import InfiniteScroll from "react-infinite-scroll-component";
import react from "../images/react-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { blue } from "@mui/material/colors";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const skelArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const getData = () => {
    fetch(`https://lazyloadingrailsapi.herokuapp.com/index?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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
          {skelArr.map((skel) => {
            return (
              <Grid item xs={12} sm={6} md={5}>
                <SkeletonCard skel={skel} />
              </Grid>
            );
          })}
        </Grid>
      )}
      {!loading && data && data.length > 0 && (
        <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={getData}
          hasMore={page <= lastPage}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center", alignItems: "center" }}>
              {/* <img src={react} style={{ height: "50px" }} /> */}
              <FontAwesomeIcon
                icon={faReact}
                style={{ color: blue[500], marginRight: "0.3em" }}
                className="spinner"
              ></FontAwesomeIcon>
              <h1>Enter the React Hall of Fame</h1>
              {/* <img src={react} style={{ height: "50px" }} /> */}
              <FontAwesomeIcon
                icon={faReact}
                style={{
                  color: blue[500],
                  marginLeft: "0.3em",
                }}
                className="spinner"
              ></FontAwesomeIcon>
            </p>
          }
        >
          <Grid container spacing={0}>
            {data.map((item) => (
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
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Home;
