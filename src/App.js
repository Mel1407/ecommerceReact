import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "../src/components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings />
    </div>
  );
}

export default App;
