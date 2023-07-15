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
                   - audio??????
    - Add error pop up if word doesnt exist   
    - Refresh when button clicked 
    - Make user input work when enter pressed as well as button clicked           


*/

function App() {
  // States
  const [word, setWord] = useState("");
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [audio, setAudio] = useState(null);
  const [userInput, setUserInput] = useState("");
  // To use API data outside of api function
  const [apiData, setApiData] = useState(null);

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
        setApiData(data);
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
        console.log(verb);
        // Phonetic
        setPhonetic(data[0].phonetic);
      } catch (error) {
        console.error(error);
      }
    }
    defineWord();
  }, [word]);

  // Even handler for getting value of input
  function handleInputChange(event) {
    const inputText = event.target.value;
    setUserInput(inputText);
    console.log(userInput);
  }

  // Event handler for input key press
  function handleInputKeyPress(event) {
    if (event.key === "Enter") {
      defineHandleClick();
    }
  }

  // Event listener for define btn
  function defineHandleClick() {
    setWord(userInput);
    // defineWord();
    console.log("define btn clicked");
  }

  // Event listener for Phonetic btn
  function phoneticHandleClick() {
    setPhonetic(phonetic);
    if (audio) {
      audio.pause();
    }
    if (apiData && apiData[0]?.phonetics) {
      const audioUrl =
        apiData[0].phonetics[1]?.audio || apiData[0].phonetics[0]?.audio;
      if (audioUrl) {
        const newAudio = new Audio(audioUrl);
        newAudio.play();
        setAudio(newAudio);
      }
    }
    console.log("phonetic btn clicked");
  }

  // Event listener for Refresh btn
  function refreshHandleClick() {
    // Resets all states
    setWord("");
    setNoun("");
    setVerb("");
    setPhonetic("");
    setAudio("");
    setUserInput("");
    console.log("refresh btn clicked");
  }
  return (
    <div>
      <h1>Welcome to the online dictionary!!</h1>
      <EnterWordContainer
        setWord={setWord}
        userInput={userInput}
        defineHandleClick={defineHandleClick}
        handleInputChange={handleInputChange}
        handleInputKeyPress={handleInputKeyPress}
      />
      <DefinitionContainer
        noun={noun}
        verb={verb}
        phonetic={phonetic}
        phoneticHandleClick={phoneticHandleClick}
      />
      <button className="refreshBtn" onClick={refreshHandleClick}>
        Refresh
      </button>
    </div>
  );
}

export default App;
