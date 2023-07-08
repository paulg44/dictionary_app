// Component for Definition Container

function DefinitionContainer() {
  return (
    <div class="definition-container">
      <div class="noun-container inner-container">
        <h2>Noun:</h2>
        <p data-testid="noun" id="noun"></p>
      </div>
      <div class="verb-container inner-container">
        <h2>Verb:</h2>
        <p id="verb"></p>
      </div>
      <button id="audio">Phonetic</button>
      <p id="phonetic"></p>
    </div>
  );
}

export default DefinitionContainer;
