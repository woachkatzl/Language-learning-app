import React from "react";

//components
import { TableRow } from "../control-table-row";

//styles
import styles from "./table.module.scss";

function ControlTable(props) {
  const { words } = props;

  return (
    <div className={styles.table}>
      <div className={styles.thead}>
        <div className={styles.tr}>
          <div className={styles.td}>#</div>
          <div className={styles.td}>Слово</div>
          <div className={styles.td}>Транскрипция</div>
          <div className={styles.td}>Перевод</div>
          <div className={styles.td}>Тематика</div>
          <div className={styles.td}></div>
        </div>
      </div>
      <div className={styles.tbody}>
        {words.map((word) => (
          <TableRow
            key={word.id}
            id={word.id}
            word={word.english}
            transcription={word.transcription}
            translation={word.russian}
            topic={word.topic}
          />
        ))}
      </div>
      <div className={styles.tfoot}></div>
    </div>
  );
}

export { ControlTable };
