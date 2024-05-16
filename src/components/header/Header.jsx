import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Contexto</h1>
      <div className={styles.numbersBlock}>
        <p>
          Game: <span>#666</span>
        </p>
        <p>
          Guesses: <span></span>
        </p>
      </div>
    </header>
  );
}
