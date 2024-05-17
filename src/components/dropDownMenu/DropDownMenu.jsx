import React, { useState } from "react";
import styles from "./DropDownMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import data from "./data.js";

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  function handleItemClick() {
    setIsOpen(false);
  }

  return (
    <div className={styles.dropDownContainer}>
      <div className={styles.dropDownTrigger} onClick={toggleDropDown}>
        <FontAwesomeIcon icon={faEllipsisV} className={styles.customIco} />
      </div>

      {isOpen && (
        <div className={`${styles.dropDownList} ${isOpen && styles.show}`}>
          {data.map((dataItem) => (
            <div
              key={dataItem.id}
              className={styles.dropDownItem}
              onClick={() => handleItemClick(dataItem.id)}
            >
              <div className={styles.itemContect}>
                {dataItem.icon}
                <p>{dataItem.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
