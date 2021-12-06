// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import SignUp from './SignUp';

// it('can be dismissed', () => {
//   const handleClose =jest.fn();
//   const { getByText } = render(<SignUp handleClose={handleClose} />);
//   fireEvent.click(getByText("Cancel"));
//   expect(handleClose).toHaveBeenCalled();
// });

import SignUp from "./SignUp";
import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextField from '@mui/material/TextField';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<SignUp />)
});

it('renders the signup form header', () => {
  render(<SignUp />)
  expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeInTheDocument();
});

it('renders the form fields', () => {
  render(<SignUp />)
  expect(screen.getByText('First Name'))
  expect(screen.getByText('Last Name'))
  expect(screen.getByText('Email Address'))
  expect(screen.getByText('Password'))
  expect(screen.getByText('Confirm Password'))
});

it('renders the signup form submit button', () => {
  render(<SignUp />)
  expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
});
