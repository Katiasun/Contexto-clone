import React from "react";
import styles from "./PlayerInput.module.css";

export default function PlayerInput({ value, onChange }) {
  return (
    <input
      className={styles.playerInput}
      type="text"
      placeholder="Enter your guess..."
      value={value}
      onChange={onChange}
    />
  );
}
