import React, { useState } from "react";
import styles from "./FAQacordion.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQaccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItem} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.accordionTitle}>{title}</div>
        <div className={styles.openAccordion}>{isOpen ? <FaMinus /> : <FaPlus />}</div>
        {isOpen && <div className={styles.accordionContent}>{content}</div>}
      </div>
    </div>
  );
}