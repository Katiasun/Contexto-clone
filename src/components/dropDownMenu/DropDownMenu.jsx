import React, { useState } from "react";
import styles from "./DropDownMenu.module.css";
import { AiOutlineEllipsis } from "react-icons/ai";

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  function handleItemClick(item) {
    console.log(item);
    setIsOpen(false);
  }

  return (
    <div className={styles.dropDownContainer}>
      <div className={styles.dropDownTrigger} onClick={toggleDropDown}>
        <AiOutlineEllipsis />
      </div>

      {isOpen && (
        <div className={styles.dropDownList}>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            How to play
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            Hint
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            Give up
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            Previous games
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            Settings
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            Credits
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            Feedback
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            FAQ
          </div>
        </div>
      )}
    </div>
  );
}
