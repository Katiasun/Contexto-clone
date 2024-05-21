import React, { useState, useEffect } from "react";
import styles from "./GameBoard.module.css";
import PlayerInput from "../playerInput/PlayerInput";
import Scoreboard from "../scoreboard/Scoreboard";

export default function GameBoard() {
  const [guessedWord, setGuessedWord] = useState("");
  const [correctWord, setCorrectWord] = useState("head");
  const [typeWords, setTypeWords] = useState([]);

  function handleInputChange(event) {
    setGuessedWord(event.target.value);
  }

  function handleEnter(word) {
    if (word.trim() !== "") {
      const accuracy = Math.round(Math.random() * 100);
      const newWordObj = {
        string: word,
        percentage: accuracy,
      };
      setTypeWords([...typeWords, newWordObj]);
      setGuessedWord("");
    }
  }

  return (
    <div className={styles.gameBoard}>
      <PlayerInput value={guessedWord} onChange={handleInputChange} onEnter={handleEnter} />

      <div className={styles.typeWords}>
        {typeWords.map((wordObj, index) => (
          <div key={index} className={styles.appearedWord}>
            <span className={styles.word}>{wordObj.string}</span>
            <span className={styles.percentage}>{wordObj.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
