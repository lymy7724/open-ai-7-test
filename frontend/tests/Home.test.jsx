import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home";
import React from "react";
import logo from '../../public/lrnr-logo.png'


test("Always true test", () => {
  expect(true).toBe.true;
});

test("header test", () => {
  render(<Home/>);
  const header = screen.getByText(/Your guided path to programming enlightenment/i);
  expect(header).toBeInTheDocument();
})

test("check main button test", () => {
  render(<Home/>);
  const button = screen.getByText(/Begin Journey/i);
  expect(button).toBeInTheDocument();
});
