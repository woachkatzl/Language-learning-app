import React from "react";

//components
import { Button } from "../ui-kit/button";

//styles
import classNames from "classnames";
import styles from "./tableRow.module.scss";
import redBtn from "../ui-kit/button/styles/redBtn.module.scss";
import yellowBtn from "../ui-kit/button/styles/yellowBtn.module.scss";

//images
import editIcon from "../ui-kit/button/icons/edit.svg";
import deleteIcon from "../ui-kit/button/icons/delete.svg";

function TableRow(props) {
  const { id, word, transcription, translation, topic } = props;

  //Составные классы
  const buttonCell = classNames(styles.td, styles.buttonCell);

  return (
    <div className={styles.tr}>
      <div className={styles.td}>{id}</div>
      <div className={styles.td}>{word}</div>
      <div className={styles.td}>{transcription}</div>
      <div className={styles.td}>{translation}</div>
      <div className={styles.td}>{topic}</div>
      <div className={buttonCell}>
        <Button
          type="button"
          icon={editIcon}
          alt="Edit icon"
          theme={yellowBtn}
        />
        <Button
          type="button"
          icon={deleteIcon}
          alt="Delete icon"
          theme={redBtn}
        />
      </div>
    </div>
  );
}

export { TableRow };
