import React from "react";
import ReactDOM from "react-dom";
import AboutUs from "./AboutUs";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AboutUs></AboutUs>, div);
});

it("renders text correctly", () => {
  const { getByTestId } = render(<AboutUs></AboutUs>);
  expect(getByTestId("aboutUsTitle")).toHaveTextContent("A Force for Good");
});


