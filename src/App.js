import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/LogIn";
import LogIn from "./components/LogIn";
import ModalDialog from "./components/ModalDialog";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
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
    <Router>
      <>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Navigation themeToggler={themeToggler} handleOpen={handleOpen} />
          <ModalDialog open={open} handleClose={handleClose} />

          <>
            <GlobalStyles />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </>
        </ThemeProvider>
      </>
    </Router>
  );
}

export default App;
