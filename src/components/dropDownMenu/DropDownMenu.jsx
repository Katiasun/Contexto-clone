import React, { useState } from "react";
import styles from "./DropDownMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { CiSettings } from "react-icons/ci";
import { TbMessageCircle } from "react-icons/tb";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { BsInfoCircle } from "react-icons/bs";
import { PiQuestionLight, PiLightbulb, PiFlagThin, PiCalendarBlankLight } from "react-icons/pi";

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
            <div className={styles.itemContect}>
              <PiQuestionLight />
              <p>How to play</p>
            </div>
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            <div className={styles.itemContect}>
              <PiLightbulb />
              <p>Hint</p>
            </div>
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            <div className={styles.itemContect}>
              <PiFlagThin />
              <p>Give up</p>
            </div>
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            <div className={styles.itemContect}>
              <PiCalendarBlankLight />
              <p>Previous games</p>
            </div>
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            <div className={styles.itemContect}>
              <CiSettings />
              <p>Settings</p>
            </div>
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            <div className={styles.itemContect}>
              <BsInfoCircle />
              <p>Credits</p>
            </div>
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            <div className={styles.itemContect}>
              <TbMessageCircle />
              <p>Feedback</p>
            </div>
          </div>
          <div className={styles.dropDownItem} onClick={handleItemClick}>
            <div className={styles.itemContect}>
              <FaRegCircleQuestion />
              <p>FAQ</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
