import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/newsforce/i);
  expect(linkElement).toBeInTheDocument();
});

test("should navigate to About Us page when link is clicked", () => {
  const { getByText } = render(<App></App>);
  expect(window.location.href).toBe("http://localhost/");
  const link = getByText("About Us");
  fireEvent.click(link);
  expect(window.location.href).toBe("http://localhost/about");
});
