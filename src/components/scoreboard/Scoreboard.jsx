import styles from "./Scoreboard.module.css";

export default function Scoreboard({ accuracy }) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.accuracyLine} style={{ width: `${accuracy}%` }}></div>
      <div className={styles.accuracyText}>{`${accuracy}%`}</div>
    </div>
  );
}
