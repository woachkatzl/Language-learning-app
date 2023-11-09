import React from "react";

//styles
import styles from "./tableRow.module.scss";

function TableRow(props) {
  const { id, word, transcription, translation, topic } = props;

  return (
    <div className={styles.tr}>
      <div className={styles.td}>{id}</div>
      <div className={styles.td}>{word}</div>
      <div className={styles.td}>{transcription}</div>
      <div className={styles.td}>{translation}</div>
      <div className={styles.td}>{topic}</div>
      <div className={styles.td}></div>
    </div>
  );
}

export { TableRow };
