// Component for the user input of a word
// Imports

import { useState } from "react";
import "./EnterWord.css";

function EnterWordContainer() {
  //   States
  const [userInput, setUserInput] = useState({ word: "" });

  // Function for getting value of input
  function handleInputChange(event) {
    const inputText = event.target.value;
    setUserInput({ word: inputText });
    console.log(userInput);
  }

  return (
    <div className="enterWordContainer">
      <label htmlFor="word">Enter Your Word</label>
      <input
        type="text"
        value={userInput.word}
        onChange={handleInputChange}
        required
      />
      <button className="standardBtn">Define</button>
    </div>
  );
}

export default EnterWordContainer;
