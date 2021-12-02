import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
'& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
'& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const SignUp = ({ handleClose }) => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField label="First Name" variant="filled" required />
      <TextField label="Last Name" variant="filled" required />
      <TextField label="Email" variant="filled" type="email" required />
      <TextField label="Password" variant="filled" type="password" required />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUp
