// Component for the user input of a word
// Imports
import React from "react";
import "./EnterWord.css";

type EnterWordContainerProps = {
  setWord: React.Dispatch<React.SetStateAction<string>>;
  defineHandleClick: () => void;
  handleInputChange: (event: any) => void;
  handleInputKeyPress: (event: any) => void;
  userInput: string;
};

function EnterWordContainer({
  defineHandleClick,
  handleInputChange,
  handleInputKeyPress,
  userInput,
}: EnterWordContainerProps) {
  return (
    <div className="enterWordContainer">
      <label htmlFor="word">Enter Your Word</label>
      <input
        name="input"
        type="text"
        value={userInput}
        onChange={handleInputChange}
        required
        onKeyDown={handleInputKeyPress}
      />
      <button className="standardBtn" onClick={defineHandleClick}>
        Define
      </button>
    </div>
  );
}

export default EnterWordContainer;
