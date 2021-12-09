import React from 'react';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { useNavigate, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import newsforceLogo from '../vectors/newsforceLogo.svg';
const Navigation = ({ expanded, setExpanded }) => {
  const navigate = useNavigate();

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', justifyContent: 'center' }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="nav-title">
            <img src={newsforceLogo} width="250" height="auto" alt="newsforce-logo" />
          </Link>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <FilterListIcon />
          </ExpandMore>
          <Button color="inherit" onClick={() => navigate('/about')}>
            About Us
          </Button>
          <Button color="inherit" onClick={() => navigate('/signup')}>
            Sign Up
          </Button>
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
