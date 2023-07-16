import { render, screen } from "@testing-library/react";
import DefinitionContainer from "./Definition";

/* Tests 
     - Test noun renders when api called
     - Test verb renders when api called
     - Test phonetic renders when api called
*/

// Test test
test("renders page", () => {
  render(<DefinitionContainer />);
  const linkElement = screen.getByText(/Noun/i);
  expect(linkElement).toBeInTheDocument();
});
