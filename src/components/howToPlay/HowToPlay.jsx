import React from "react";
import styles from "./HowToPlay.module.css";

export default function HowToPlay() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>How to play</h2>
      </div>
      <div className={styles.text}>
        <p>Find the secret word. You have unlimited guesses.</p>
        <p>
          The words were sorted by an artificial intelligence algorithm according to how similar
          they were to the secret word.
        </p>
        <p>After submitting a word, you will see its position. The secret word is number 1.</p>
        <p>
          The algorithm analyzed thousands of texts. It uses the context in which words are used to
          calculate the similarity between them.
        </p>
      </div>
    </div>
  );
}
