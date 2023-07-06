// Component for the user input of a word
// Imports
import Button from "../Button/Button";

function EnterWordContainer() {
  return (
    <div class="enterWordContainer">
      <label for="word">Enter Your Word</label>
      <input id="word" type="text" />
      <Button btnText="Define" />
    </div>
  );
}

export default EnterWordContainer;
