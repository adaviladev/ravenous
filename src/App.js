import "./App.css";
import { BusinessList } from "./components/BusinessList";
import { sampleBusiness, anotherBusiness } from "./data/sampleBusiness.js";
import { SearchBar } from "./components/SearchBar.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi.</p>
        <SearchBar />
        <BusinessList businesses={[sampleBusiness, anotherBusiness]} />
      </header>
    </div>
  );
}

export default App;
