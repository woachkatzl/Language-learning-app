import React from "react";

//components
import { Button } from "../ui-kit/button";

//styles
import styles from "./formRow.module.scss";
import greenBtn from "../ui-kit/button/styles/greenBtn.module.scss";
import yellowBtn from "../ui-kit/button/styles/yellowBtn.module.scss";

//images
import saveIcon from "../ui-kit/button/icons/save.svg";
import cancelIcon from "../ui-kit/button/icons/cancel.svg";

function formRow(props) {
  const { id, word, transcription, translation, topic } = props;

  //Составные классы
  const buttonCell = classNames(styles.td, styles.buttonCell);

  return (
    <form className={styles.tr}>
      <div className={styles.td}>
        <input type="text" placeholder={id} />
      </div>
      <div className={styles.td}>
        <input type="text" placeholder={word} />
      </div>
      <div className={styles.td}>
        <input type="text" placeholder={transcription} />
      </div>
      <div className={styles.td}>
        <input type="text" placeholder={translation} />
      </div>
      <div className={styles.td}>
        <input type="text" placeholder={topic} />
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

export { formRow };
