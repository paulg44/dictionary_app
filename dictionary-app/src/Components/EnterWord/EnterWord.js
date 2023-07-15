// Component for the user input of a word
// Imports

import "./EnterWord.css";

function EnterWordContainer({
  defineHandleClick,
  handleInputChange,
  handleInputKeyPress,
  userInput,
}) {
  return (
    <div className="enterWordContainer">
      <label htmlFor="word">Enter Your Word</label>
      <input
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
