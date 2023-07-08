// Imports
import "./App.css";
import EnterWordContainer from "./Components/EnterWord/EnterWord";
import DefinitionContainer from "./Components/Definition/Definition";

function App() {
  return (
    <div>
      <h1>Welcome to the online dictionary!!</h1>
      <EnterWordContainer />
      <DefinitionContainer />
      <button className="refreshBtn">Refresh</button>
    </div>
  );
}

export default App;
