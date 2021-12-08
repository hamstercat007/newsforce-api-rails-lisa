import React from "react";
import NewsCard from "./NewsCard";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import SkeletonCard from "./SkeletonCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const skelArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const getData = () => {
    fetch(`https://newsforce-api.herokuapp.com/?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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
    }, 4000);
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
      {!loading && (
        <Grid container spacing={0}>
          {data &&
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
      )}
    </div>
  );
};

export default Home;
