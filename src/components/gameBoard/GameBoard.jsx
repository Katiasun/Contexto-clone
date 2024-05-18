import React, { useState, useEffect } from "react";
import styles from "./GameBoard.module.css";
import PlayerInput from "../playerInput/PlayerInput";
import Scoreboard from "../scoreboard/Scoreboard";

export default function GameBoard() {
  const [guessedWord, setGuessedWord] = useState("");
  const [correctWord, setCorrectWord] = useState("example");
  const [typeWords, setTypeWords] = useState([]);

  function handleInputChange(word) {
    // setGuessedWord(event.target.value);
    const newWordObj = {
      string: word,
      parcentage: Math.random() * 100,
    };
    setTypeWords([...typeWords, newWordObj]);
  }

  function handleEnter(word) {
    setTypeWords([...typeWords, word]);
  }
  function calculateAccuracy() {
    const totalCharacters = correctWord.length;
    const correctCharacters = guessedWord
      .split("")
      .filter((char, index) => char === correctWord[index]).length;
    return (correctCharacters / totalCharacters) * 100;
  }

  return (
    <div className={styles.gameBoard}>
      <PlayerInput value={guessedWord} onChange={handleInputChange} onEnter={handleEnter} />

      <div className={styles.typeWords}>
        {typeWords.map((wordObj, index) => (
          <div key={index} className={styles.appearedWord}>
            {wordObj.string}{" "}
            {typeof wordObj.parcentage === "number" ? wordObj.parcentage.toFixed(1) : "N/A"}%
          </div>
        ))}
      </div>
    </div>
  );
}
