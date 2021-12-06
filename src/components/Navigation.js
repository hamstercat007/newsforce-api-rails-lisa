import React from 'react';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Link } from 'react-router-dom';

const Navigation = ({ themeToggler }) => {
  const navigate = useNavigate();

  function handleAboutClick() {
    navigate('/about');
  }
  function handleSignUpClick() {
    navigate('/signup');
  }
  function handleLogInClick() {
    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="nav-title">
              NEWSFORCE
            </Link>
          </Typography>
          <Button color="inherit" onClick={handleAboutClick}>
            About Us
          </Button>
          <Button color="inherit" onClick={handleSignUpClick}>
            Sign Up
          </Button>
          <Button color="inherit" onClick={handleLogInClick}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
