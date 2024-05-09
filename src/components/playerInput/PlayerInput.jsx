import React, { useState } from "react";
import styles from "./PlayerInput.module.css";

export default function PlayerInput({ onChange, onEnter }) {
  const [inputValue, setInputValue] = useState("");

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      onEnter(inputValue);
      setInputValue("");
    }
  }

  return (
    <input
      className={styles.playerInput}
      type="text"
      placeholder="Enter your guess..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
