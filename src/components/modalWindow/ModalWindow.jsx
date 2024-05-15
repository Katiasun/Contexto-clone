import React, { useState } from "react";
import styles from "./ModalWindow.module.css";

export default function ModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleOutsideClick(e) {
    if (e.target.classList.contains(styles.modalBackdrop)) {
      setIsModalOpen(false);
    }
  }

  return (
    <>
      <button onClick={toggleModal} className={styles.modalBtn}>
        Read more...
      </button>

      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={handleOutsideClick}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={handleClose}>
              &times
            </button>
            <ul>
              {DataTransfer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
