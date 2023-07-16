import { render, screen, act, fireEvent } from "@testing-library/react";
import DefinitionContainer from "./Definition";
import App from "../../App";

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

// Is noun displayed after API called
test("noun displayed", async () => {
  //   Mock the fetch function
  jest.spyOn(window, "fetch").mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({}), // Mock response is empty object
  });

  render(<App />);

  const input = screen.getByRole("textbox");
  const defineBtn = screen.getByRole("button", { name: "Define" });
  expect(input && defineBtn).toBeInTheDocument();

  //   Simulate user input
  act(() => {
    fireEvent.change(input, { target: { value: "word" } });
    fireEvent.click(defineBtn);
  });

  const nounDef = screen.getByRole("heading", { name: "Noun:" });
  expect(nounDef).toBeInTheDocument();

  window.fetch.mockRestore();
});
