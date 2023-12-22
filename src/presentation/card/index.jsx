import React, { useEffect } from "react";

//Стили
import styles from "./card.module.scss";

function Card(props) {
  const { word, transcription, translation, id, isFlipped, handleClick } =
    props;

  return (
    <div className={styles.card} onClick={() => handleClick(id)}>
      <h2 className={styles.word}>{word}</h2>
      <p>{transcription}</p>
      {isFlipped && <p className={styles.translation}>{translation}</p>}
      <i className={styles.hint}>Нажмите карточку, чтобы увидеть перевод</i>
    </div>
  );
}

export { Card };
