import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'

import App from "./App";

it ('renders without crashing', () => {
  render(<App />)
});

it('allows you to navigate to other pages', () => {
  render(<App />)
  expect(screen.getByText(/newsforce/i)).toBeInTheDocument()
  const leftClick = {button: 0}
  userEvent.click(screen.getByText(/Sign Up/i), leftClick)
  expect(screen.getByText(/Create your account/i)).toBeInTheDocument()
});
