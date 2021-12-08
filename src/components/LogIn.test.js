import LogIn from "./LogIn";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

it ('renders without crashing', () => {
  render(<LogIn />)
});

it('renders the log in form header', () => {
  render(<LogIn />)
  expect(screen.getByRole('heading', { name: 'Log In' })).toBeInTheDocument();
});

it('renders the form fields', () => {
  render(<LogIn />)
  expect(screen.getByText('Email Address'))
  expect(screen.getByText('Password'))
});

it('renders the log in form submit button', () => {
  render(<LogIn />)
  expect(screen.getByRole('button', { name: 'Log In' })).toBeInTheDocument();
});
