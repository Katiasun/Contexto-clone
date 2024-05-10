import React, { useState } from "react";
import styles from "./DropDownMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faEllipsisV} className={styles.customIco} />
      </div>

      {isOpen && (
        <div className={`${styles.dropDownList} ${isOpen && styles.show}`}>
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
