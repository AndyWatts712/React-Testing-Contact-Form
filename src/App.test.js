import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('Can fill out form, form validates, click submit and object appears')
  render(<App /> )

  const fName = screen.getByLabelText()
