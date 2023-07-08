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

  // Call the API
  async function defineWord() {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Word not available");
      }

      // Update state variables
      const randomNoun = Math.floor(
        Math.random() * data[0].meanings[0].definitions.length
      );
      setNoun(data[0].meanings[0].definitions[randomNoun].definition);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Welcome to the online dictionary!!</h1>
      <EnterWordContainer setWord={setWord} />
      <DefinitionContainer />
      <button className="refreshBtn">Refresh</button>
    </div>
  );
}

export default App;
