import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import ItemListContainer from "../src/components/itemListContainer/ItemListContainer";
import CardsProducts from "./components/itemListContainer/CardsProducts";
import ItemCount from "./components/itemListContainer/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="Bienvenidos!" render={<CardsProducts />} />
      <ItemCount />
    </div>
  );
}

export default App;
