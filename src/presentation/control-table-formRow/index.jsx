import React from "react";

//components
import { Button } from "../ui-kit/button";

//styles
import classNames from "classnames";
import styles from "./formRow.module.scss";
import greenBtn from "../ui-kit/button/styles/greenBtn.module.scss";
import yellowBtn from "../ui-kit/button/styles/yellowBtn.module.scss";

//images
import saveIcon from "../ui-kit/button/icons/save.svg";
import cancelIcon from "../ui-kit/button/icons/cancel.svg";

function FormRow(props) {
  const { id, word, transcription, translation, topic } = props;

  //Составные классы
  const buttonCell = classNames(styles.td, styles.buttonCell);

  return (
    <form className={styles.tr}>
      <div className={styles.td}>{id}</div>
      <div className={styles.td}>
        <input className={styles.formInput} type="text" value={word} />
      </div>
      <div className={styles.td}>
        <input className={styles.formInput} type="text" value={transcription} />
      </div>
      <div className={styles.td}>
        <input className={styles.formInput} type="text" value={translation} />
      </div>
      <div className={styles.td}>
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
          theme={yellowBtn}
        />
      </div>
    </form>
  );
}

export { FormRow };
