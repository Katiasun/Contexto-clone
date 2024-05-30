import React, { useState } from "react";
import styles from "./GameBoard.module.css";
import PlayerInput from "../playerInput/PlayerInput";

export default function GameBoard() {
  const [typedWords, setTypedWords] = useState([]);

  function handleEnter(word) {
    if (word.trim() !== "") {
      const accuracy = Math.round(Math.random() * 100);
      const newWordObj = {
        string: word,
        percentage: accuracy,
      };

      const sortTypedWwords = [newWordObj, ...typedWords]
        .sort((a, b) => b.percentage - a.percentage)
        .slice(0, 4);
      setTypedWords(sortTypedWwords);
    }
  }

  return (
    <div className={styles.gameBoard}>
      <PlayerInput onEnter={handleEnter} />

      <div className={styles.typeWords}>
        {typedWords.map((wordObj, index) => (
          <div
            className={styles.appearedWord}
            key={index}
            style={{ "--percent": `${wordObj.percentage}%` }}
          >
            <div>{wordObj.string}</div>
            <div>{wordObj.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
