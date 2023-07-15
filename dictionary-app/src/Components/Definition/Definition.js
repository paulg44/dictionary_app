// Component for Definition Container

function DefinitionContainer({ noun, verb, phonetic, phoneticHandleClick }) {
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
