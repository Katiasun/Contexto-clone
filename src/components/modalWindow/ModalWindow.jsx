import React, { useState } from "react";
import styles from "./ModalWindow.module.css";

export default function ModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      <button onClick={toggleModal} className={styles.modalBtn}>
        Read more...
      </button>

      {}
    </div>
  );
}
