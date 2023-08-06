// Component for Definition Container
import React from "react";

type DefinitionProps = {
  noun: string;
  verb: string;
  phonetic: string;
  phoneticHandleClick: () => void;
};

function DefinitionContainer({
  noun,
  verb,
  phonetic,
  phoneticHandleClick,
}: DefinitionProps) {
  return (
    <div className="definition-container">
      <div className="noun-container inner-container">
        <h2>Noun: {noun}</h2>
        <p data-testid="noun" id="noun"></p>
      </div>
      <div className="verb-container inner-container">
        <h2>Verb: {verb}</h2>
        <p id="verb"></p>
      </div>
      <button onClick={phoneticHandleClick}>Phonetic</button>
      <p>{phonetic}</p>
    </div>
  );
}

export default DefinitionContainer;
