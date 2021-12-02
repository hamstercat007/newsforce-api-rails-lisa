import React, { useState, useEffect } from 'react';
import NewsCard from './components/NewsCard';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import Navigation from './components/Navigation';
import ModalDialog from './components/ModalDialog';

function App() {
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

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  // Modal dialog
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Navigation themeToggler={themeToggler} handleOpen={handleOpen} />
        <ModalDialog open={open} handleClose={handleClose} />
        <>
          <GlobalStyles />
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
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
