// Component for the user input of a word
// Imports

import "./EnterWord.css";

function EnterWordContainer() {
  return (
    <div class="enterWordContainer">
      <label for="word">Enter Your Word</label>
      <input id="word" type="text" />
      <button className="standardBtn">Define</button>
    </div>
  );
}

export default EnterWordContainer;
