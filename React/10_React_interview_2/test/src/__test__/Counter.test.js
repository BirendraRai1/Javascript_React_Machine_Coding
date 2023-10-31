import Counter from "../components/Counter";
import { render, screen, fireEvent } from "@testing-library/react";
//with the fireEvent you can emulate something
//react-testing-library gives you a virtual DOM
/*Unit Testing:- testing a component in isolation
 *by testing that in all possible scenario
 *We are using react-testing-lib to emulate rendering of that
 *component**
 
 * It is similar to like when you test a car you check all the components*/
//with describe you can group all your test cases
describe("counter component test cases", () => {
  test("initial state check", () => {
    //We are testing to see that
    //+ is present or not
    //- is present or not
    //count 0 is present or not

    render(<Counter />);
    const countText = screen.getByText("Count 0");
    const plusText = screen.getByText("+");
    const minusText = screen.getByText("-");
    expect(countText).toBeInTheDocument();
    expect(minusText).toBeInTheDocument();
    expect(plusText).toBeInTheDocument();
  });

  test("increment state check", () => {
    //emulated render
    //her we are calling emulated because we are just rendering the component not the whole thing that is the beauty
    render(<Counter />);
    const plusText = screen.getByText("+");
    //emulate click
    fireEvent.click(plusText);
    const isOnePresent = screen.getByText("Count 1");
    expect(isOnePresent).toBeInTheDocument();
    // if we want to test count 2, in that case we need to write 2 times fireEvent.click(plusText)
  });

  test("decrement state check", () => {
    render(<Counter />);
    const minusText = screen.getByText("-");
    fireEvent.click(minusText);
    const isMinusOnePresent = screen.getByText("Count -1");
    expect(isMinusOnePresent).toBeInTheDocument();
  });

  test("snapshot for counter", () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
    /*initially we are rendering and getting fragment that is initially our render will be called and snapshot would be captured
     *Line 50 checks whether the previous code we have written and the current code matches or not
     *There will be a directory created __snapshots__ automatically when we create this testcase.In that directory
     * we will have the actual output for the first render
     * If we want to add something the snapshot would not match you have to type u
     * if the snapshot fails either we have to remove the text from the component or add the component by typing u
     * ****/
  });
});
