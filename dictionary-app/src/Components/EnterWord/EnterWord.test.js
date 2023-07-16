import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import EnterWordContainer from "./EnterWord";
import App from "../../App";
import { expect } from "@playwright/test";

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
test("can a word be entered to input", async () => {
  const simulatedWord = "word";

  render(<EnterWordContainer userInput={simulatedWord} />);

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();

  act(() => {
    fireEvent.change(input, { target: { value: simulatedWord } });
  });
  expect(input.value).toBe(simulatedWord);
});

// Test API is called when define btn clicked
test("api called when define btn clicked", async () => {
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

  //   Wait for API call to complete
  await act(async () => {
    await waitFor(() => {
      expect(window.fetch).toHaveBeenCalledTimes(2);
    });
  });

  window.fetch.mockRestore();
});

// // If word does not exist render alert box
// test("alert box renders", () => {
//   const simulatedWord = "jhfj";

//   render(<App userInput={simulatedWord} />);

//   const input = screen.getByRole("textbox");
//   const defineBtn = screen.getByRole("button", { name: "Define" });
//   expect(input && defineBtn).toBeInTheDocument();

//   fireEvent.change(input, { target: { value: simulatedWord } });
//   fireEvent.click(defineBtn);

//   const alertBox = screen.getByText(
//     "Word not found, or incorrectly spelt, please try again."
//   );
//   expect(alertBox).toBeInTheDocument();
// });
