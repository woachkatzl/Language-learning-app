import React from "react";

//styles
import styles from "./table.module.scss";

function ControlTable() {
  return (
    <div className={styles.tableContainer}>
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
        <div className={styles.tbody}></div>
        <div className={styles.tfoot}></div>
      </div>
    </div>
  );
}

export { ControlTable };
