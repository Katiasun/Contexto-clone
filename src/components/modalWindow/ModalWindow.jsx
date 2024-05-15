import React, { useState } from "react";
import styles from "./ModalWindow.module.css";
import data from "./data.js";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

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
              <IoCloseCircleOutline />
            </button>
            <ul>
              {data.map((item) => (
                <li key={item.id} onClick={() => toggleAccordionClick(item.id)}>
                  <div className={styles.accordionTitle}>
                    <h3>{item.title}</h3>
                    {accordionOpen === item.id ? <FaMinus /> : <FaPlus />}
                  </div>
                  {accordionOpen === item.id && (
                    <div className={styles.accordionConetnet}>{item.text}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
