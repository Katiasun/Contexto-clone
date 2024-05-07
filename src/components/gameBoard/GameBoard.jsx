import React, { useState } from "react";
import styles from "./GameBoard.module.css";

export default function GameBoard() {
  const [guessedWord, setGuessedWord] = useState("");
  const [correctWord, setCorrectWord] = useState("example");

  function handleInputChange(event) {
    setGuessedWord(event.target.value);
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
      <h2>Guess the Word !</h2>
      <input
        type="text"
        placeholder="Enter your guess..."
        value={guessedWord}
        onChange={handleInputChange}
      />

      <div className={styles.scoreboard}>
        <div className={styles.accuracyLine}></div>
        <div className={styles.accuracyText}></div>
      </div>
    </div>
  );
}
