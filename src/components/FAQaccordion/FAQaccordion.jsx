import React, { useState } from "react";
import styles from "./FAQacordion.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import accordionData from "./accordionData.js";

export default function FAQaccordion() {
  const [isOpen, setIsOpen] = useState(null);

  function handleSelection(getCurrentId) {
    setIsOpen(getCurrentId === isOpen ? null : getCurrentId);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {accordionData.map((dataItem) => (
          <div key={dataItem.id} className={styles.item}>
            <div onClick={() => handleSelection(dataItem.id)} className={styles.title}>
              <h3>{dataItem.title}</h3>
              {isOpen === dataItem.id ? <FaMinus /> : <FaPlus />}
            </div>
            {isOpen === dataItem.id ? (
              <div className={styles.content}>{dataItem.content}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
