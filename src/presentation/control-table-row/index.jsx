import React, { useState } from "react";

//components
import { Button } from "../ui-kit/button";

//styles
import classNames from "classnames";
import styles from "./tableRow.module.scss";
import redBtn from "../ui-kit/button/styles/redBtn.module.scss";
import yellowBtn from "../ui-kit/button/styles/yellowBtn.module.scss";
import greenBtn from "../ui-kit/button/styles/greenBtn.module.scss";
import blueBtn from "../ui-kit/button/styles/blueBtn.module.scss";

//images
import editIcon from "../ui-kit/button/icons/edit.svg";
import deleteIcon from "../ui-kit/button/icons/delete.svg";
import saveIcon from "../ui-kit/button/icons/save.svg";
import cancelIcon from "../ui-kit/button/icons/cancel.svg";

function TableRow(props) {
  const { id, word, transcription, translation, topic } = props;

  //Состояния
  const [inEdit, setEditMode] = useState(false);

  //Составные классы
  const buttonCell = classNames(styles.td, styles.buttonCell);
  const narrowCol = classNames(styles.td, styles.narrow);
  const wideCol = classNames(styles.td, styles.wide);

  //Методы
  const editClick = (e) => {
    e.preventDefault();

    setEditMode(!inEdit);
  };

  return (
    <>
      {inEdit ? (
        <form className={styles.tr}>
          <div className={styles.td}>{id}</div>
          <div className={narrowCol}>
            <input className={styles.formInput} type="text" value={word} />
          </div>
          <div className={narrowCol}>
            <input
              className={styles.formInput}
              type="text"
              value={transcription}
            />
          </div>
          <div className={wideCol}>
            <input
              className={styles.formInput}
              type="text"
              value={translation}
            />
          </div>
          <div className={narrowCol}>
            <input className={styles.formInput} type="text" value={topic} />
          </div>
          <div className={buttonCell}>
            <Button
              type="button"
              icon={saveIcon}
              alt="Save icon"
              theme={greenBtn}
            />
            <Button
              type="button"
              icon={cancelIcon}
              alt="Cancel icon"
              theme={blueBtn}
              onClick={editClick}
            />
          </div>
        </form>
      ) : (
        <div className={styles.tr}>
          <div className={styles.td}>{id}</div>
          <div className={narrowCol}>{word}</div>
          <div className={narrowCol}>{transcription}</div>
          <div className={wideCol}>{translation}</div>
          <div className={narrowCol}>{topic}</div>
          <div className={buttonCell}>
            <Button
              type="button"
              icon={editIcon}
              alt="Edit icon"
              theme={yellowBtn}
              onClick={editClick}
            />
            <Button
              type="button"
              icon={deleteIcon}
              alt="Delete icon"
              theme={redBtn}
            />
          </div>
        </div>
      )}
    </>
  );
}

export { TableRow };
