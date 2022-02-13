import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders learn react link", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Imperial destroyers center/i);
  expect(linkElement).toBeInTheDocument();
});
