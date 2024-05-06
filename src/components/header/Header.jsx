import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Contexto</h1>
      <p className={styles.header_description}>
        Guess the word based on the clues provided by your friends!
      </p>
    </header>
  );
}
