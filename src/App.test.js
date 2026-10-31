import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders the Sargam Healthcare home page", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /Care that listens/i })).toBeInTheDocument();
});