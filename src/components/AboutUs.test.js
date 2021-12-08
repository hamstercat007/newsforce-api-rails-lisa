import React from "react";
import ReactDOM from "react-dom";
import AboutUs from "./AboutUs";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AboutUs></AboutUs>, div);
});

it("renders text correctly", () => {
  const { getByTestId } = render(<AboutUs></AboutUs>);
  expect(getByTestId("aboutUsTitle")).toHaveTextContent("A Force for Good");
});

test("should navigate to About Us page when link is clicked", () => {
  const { getByText } = render(<App></App>);
  expect(window.location.href).toBe("http://localhost/");
  const link = getByText("About Us");
  fireEvent.click(link);
  expect(window.location.href).toBe("http://localhost/about");
  const headerElement = screen.getByText(/A Force For Good/i);
  expect(headerElement).toBeInTheDocument();
});
