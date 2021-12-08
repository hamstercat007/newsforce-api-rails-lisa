import SignUp from "./SignUp";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

it('renders without crashing', () => {
  render(<SignUp />)
});

it('renders the signup form header', () => {
  render(<SignUp />)
  expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeInTheDocument();
});

it('renders the form fields', () => {
  render(<SignUp />)
  expect(screen.getByText('Email Address'))
  expect(screen.getByText('Password'))
  expect(screen.getByText('Confirm Password'))
});

it('renders the signup form submit button', () => {
  render(<SignUp />)
  expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
});
