import React, { useState, useEffect } from "react";
import styles from "./GameBoard.module.css";
import PlayerInput from "../playerInput/PlayerInput";
import Scoreboard from "../scoreboard/Scoreboard";

export default function GameBoard() {
  const [guessedWord, setGuessedWord] = useState("");
  const [correctWord, setCorrectWord] = useState("example");
  const [typeWords, setTypeWords] = useState([]);

  useEffect(() => {
    fetchWord();
  }, []);

  function fetchWord() {}

  function handleInputChange(event) {
    setGuessedWord(event.target.value);
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

  function generateNewWord() {
    // Logic to generate a new word (e.g., from a predefined list or from an API call)
    return "newWord";
  }

  function handleNewRound() {
    const newWord = generateNewWord();
    setCorrectWord(newWord);
    setTypeWords([]);
  }

  return (
    <div className={styles.gameBoard}>
      <h2>Guess the Word !</h2>
      <PlayerInput value={guessedWord} onChange={handleInputChange} onEnter={handleEnter} />

      <div className={styles.typeWords}>
        {typeWords.map((word, index) => (
          <div key={index} className={styles.appearedWord}>
            {word}
          </div>
        ))}
      </div>

      {/* <Scoreboard accuracy={calculateAccuracy()} /> */}

      <button className={styles.boardBtn} onClick={handleNewRound}>
        Start New Round
      </button>
    </div>
  );
}
