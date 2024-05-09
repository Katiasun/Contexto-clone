import "./App.css";
import Header from "./components/header/Header.jsx";
import GameBoard from "./components/gameBoard/GameBoard.jsx";
import DropDownMenu from "./components/dropDownMenu/DropDownMenu.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <DropDownMenu />
      <GameBoard />
    </div>
  );
}

export default App;
