//VDOM->react-testing-library
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  //rendering our component
  render(<App />); //we are rendering at some other place not on UI.We are using the render function given by some other library commonly known as react testing library
  //we need to render becuase we cannot get the text
  //screen->will be the output
  const linkElement = screen.getByText("Learn React"); //here we are checking on the end screen are we getting the text or not
  //you matching your expectations
  expect(linkElement).toBeInTheDocument();
});
