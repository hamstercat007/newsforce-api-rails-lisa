import React from 'react';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import TagCloud from './TagCloud';
import jazeeraLogo from '../vectors/jazeera.svg';
import bbcLogo from '../vectors/bbcnews.svg';
import APlogo from '../vectors/associatedpress.svg';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

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

const Navigation = ({ themeToggler }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider light />
          <div className="flex-row">
            <TagCloud />
            <div className="flex-col">
              <FormControlLabel control={<Switch defaultChecked />} label="Africa" />
              <FormControlLabel control={<Switch defaultChecked />} label="Asia" />
              <FormControlLabel control={<Switch defaultChecked />} label="Europe" />
              <FormControlLabel control={<Switch defaultChecked />} label="North America" />
              <FormControlLabel control={<Switch defaultChecked />} label="South America" />
            </div>
          </div>
        </Collapse>
      </AppBar>
    </Box>
  );
};

export default Navigation;
