import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home";
import React from "react";


test("Always true test", () => {
  expect(true).toBe.true;
});

test("check header test", () => {
  render(<Home/>);
  const header = screen.getByText(/Your guided path to programming enlightenment/i);
  expect(header).toBeInTheDocument();
})

test("check main button test", () => {
  render(<Home/>);
  const button = screen.getByText(/Begin Journey/i);
  expect(button).toBeInTheDocument();
});

test('checks main logo with correct image and alt text', () => {
  render(<Home/>);
  const logo = screen.getByAltText('lrnr-logo');
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('alt', 'lrnr-logo');
});

test("check main button test", () => {
  render(<Home/>);
  const button = screen.getByText(/Begin Journey/i);
  expect(button).toHaveClass('btn-large');
  expect(button).toHaveAttribute('id', 'download-button');
});
