import React, { useState, useEffect } from 'react';
import NewsCard from './components/NewsCard';

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <NewsCard
            key={item.id}
            publisher={item.publisher}
            publish_date={item.publish_date}
            image_url={item.image_url}
            headline={item.headline}
            sub_headline={item.sub_headline}
            article_body={item.article_body}
          />
        ))}
    </div>
  );
}

export default App;
