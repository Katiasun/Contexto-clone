import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Contexto</h1>
      <p className={styles.headerDescription}>
        Guess the word based on the clues provided by your friends!
      </p>
    </header>
  );
}
