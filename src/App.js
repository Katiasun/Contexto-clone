import "./App.css";
import Header from "./components/header/Header.jsx";
import GameBoard from "./components/gameBoard/GameBoard.jsx";
import DropDownMenu from "./components/dropDownMenu/DropDownMenu.jsx";
import FAQaccordion from "./components/FAQaccordion/FAQaccordion.jsx";
// import accordionData from "./components/FAQaccordion/accordinData";
import { CiSquareQuestion } from "react-icons/ci";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <Header />
        <DropDownMenu />
      </div>
      <GameBoard />
      <div className="accordionWrapper">
        <div className="modalTitle">
          <CiSquareQuestion />
          <h2>FAQ</h2>
        </div>
        <FAQaccordion />
      </div>
    </div>
  );
}

export default App;
