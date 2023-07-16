import { render, screen } from "@testing-library/react";
import App from "./App";

/* End to end Test
     - user inputs word
     - clicks define btn/presses enter (do both?)
     - api is called and returns 
               - noun 
               - verb
               - phonetic
    - refresh button resets all states
*/

// Test test
test("renders page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
