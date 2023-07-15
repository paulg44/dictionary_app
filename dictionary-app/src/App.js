// Imports
import React, { useState, useEffect } from "react";
import "./App.css";
import EnterWordContainer from "./Components/EnterWord/EnterWord";
import DefinitionContainer from "./Components/Definition/Definition";

/* Overview Plan for Refactoring Logic
    - Add event listeners/handle clicks where needed
    - Set up API call using useEffect?
    - Set states for 
                   - input value
                   - noun
                   - verb
                   - phonetic
                   - audio


*/

function App() {
  // States
  const [word, setWord] = useState("");
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [audio, setAudio] = useState(null);
  const [userInput, setUserInput] = useState("");

  // Call the API
  useEffect(() => {
    async function defineWord() {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`
        );
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
          throw new Error("Word not available");
        }
        // Update state variables
        // Noun
        const randomNoun = Math.floor(
          Math.random() * data[0].meanings[0].definitions.length
        );
        setNoun(data[0].meanings[0].definitions[randomNoun].definition);
        console.log(noun);
        // Verb
        const randomVerb = Math.floor(
          Math.random() * data[0].meanings[1].definitions.length
        );
        setVerb(data[0].meanings[1].definitions[randomVerb].definition);
      } catch (error) {
        console.error(error);
      }
    }
    defineWord();
  }, [word]);

  // Function for getting value of input
  function handleInputChange(event) {
    const inputText = event.target.value;
    setUserInput(inputText);
    console.log(userInput);
  }

  // Event listener for define btn
  function defineHandleClick() {
    setWord(userInput);
    // defineWord();
    console.log("define btn clicked");
  }

  // Event listener for Phonetic btn
  function phoneticHandleClick() {
    setPhonetic();
  }

  return (
    <div>
      <h1>Welcome to the online dictionary!!</h1>
      <EnterWordContainer
        setWord={setWord}
        userInput={userInput}
        defineHandleClick={defineHandleClick}
        handleInputChange={handleInputChange}
      />
      <DefinitionContainer noun={noun} verb={verb} />
      <button className="refreshBtn">Refresh</button>
    </div>
  );
}

export default App;
