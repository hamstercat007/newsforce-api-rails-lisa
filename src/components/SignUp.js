import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Navigation from './Navigation';
import { Navigate } from 'react-router-dom';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const creds = { user: { email: data.get('email'), password: data.get('password') } };

    fetch('https://newsforce-api.herokuapp.com/api/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(creds),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        <Navigate to="/" replace />;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Navigation />
      <Container component="main" maxWidth="xs">
        <Card
          sx={{
            maxWidth: 400,
            margin: '1em',
            textAlign: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" />
            <TextField margin="normal" required fullWidth name="confirmPassword" label="Confirm Password" type="password" id="confirmPassword" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} />
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField margin="normal" autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
              <TextField margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
              <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" />
              <TextField margin="normal" required fullWidth name="confirmPassword" label="Confirm Password" type="password" id="confirmPassword" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Link to="/login" variant="body2">
                {'Already have an account? Log in'}
              </Link>
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default SignUp;
