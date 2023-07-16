import { render, screen } from "@testing-library/react";
import EnterWordContainer from "./EnterWord";

/* Tests 
     - Test a word can be entered into user input
     - Test the API is called when define btn clicked (mock api)
     - Test if a word does not exist in API, alert box renders
*/

// Test test
test("renders page", () => {
  render(<EnterWordContainer />);
  const linkElement = screen.getByText(/Enter Your Word/i);
  expect(linkElement).toBeInTheDocument();
});

// Enter Word
test("can a word be entered to input", () => {
  render(<EnterWordContainer />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});
