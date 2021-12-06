import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/newsforce/i);
  expect(linkElement).toBeInTheDocument();
});
