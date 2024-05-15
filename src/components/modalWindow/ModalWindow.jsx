import React, { useState } from "react";
import styles from "./ModalWindow.module.css";
import data from "./data.js";

export default function ModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);

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

  function toggleAccordionClick(id) {
    setAccordionOpen(accordionOpen === id ? null : id);
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
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
