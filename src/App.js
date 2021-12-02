import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Router>
      <>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Navigation themeToggler={themeToggler} />
          <>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<AboutUs />}></Route>
            </Routes>
          </>
        </ThemeProvider>
      </>
    </Router>
  );
}

export default App;
