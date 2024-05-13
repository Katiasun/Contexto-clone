import "./App.css";
import Header from "./components/header/Header.jsx";
import GameBoard from "./components/gameBoard/GameBoard.jsx";
import DropDownMenu from "./components/dropDownMenu/DropDownMenu.jsx";
import FAQaccordion from "./components/FAQaccordion/FAQaccordion.jsx";
import accordionData from "./components/FAQaccordion/accordinData";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <Header />
        <DropDownMenu />
      </div>
      <GameBoard />
      {/* <FAQaccordion title={accordionData.title} content={accordionData.content} /> */}
      {accordionData.map(({ title, content }, index) => (
        <FAQaccordion key={index} title={title} content={content} />
      ))}
    </div>
  );
}

export default App;
