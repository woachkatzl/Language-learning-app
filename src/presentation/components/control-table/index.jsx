import React, { useContext } from "react";

//components
import { TableRow } from "../control-table-row";

//styles
import styles from "./table.module.scss";

//context
import { WordsContext } from "../../../infrastructure/ServerWords";

function ControlTable(props) {
  const { isAdding, setIsAdding } = props;
  const { words } = useContext(WordsContext);

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
            topic={word.tags}
          />
        ))}
        {isAdding && (
          <TableRow
            editMode={true}
            addingMode={isAdding}
            setAddingMode={setIsAdding}
          />
        )}
      </div>
      <div className={styles.tfoot}></div>
    </div>
  );
}

export { ControlTable };
