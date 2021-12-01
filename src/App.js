import React, { useState, useEffect } from 'react';
import NewsCard from './components/NewsCard';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('sampleData.json', {
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
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <button onClick={themeToggler}>Switch Theme</button>
          <Grid container spacing={0}>
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <Grid item key={item} xs={12} sm={6} md={4} style={{ minWidth: '350px' }}>
                  <NewsCard
                    key={item.id}
                    publisher={item.publisher}
                    publish_date={item.publish_date}
                    image_url={item.image_url}
                    headline={item.headline}
                    sub_headline={item.sub_headline}
                    article_body={item.article_body}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
