import React, { useState } from "react";

//Стили
import styles from "./card.module.scss";

function Card(props) {
  const { word, transcription, translation, isFlipped, setIsFlipped } = props;

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <h2 className={styles.word}>{word}</h2>
      <p>{transcription}</p>
      {isFlipped && <p className={styles.translation}>{translation}</p>}
      <i className={styles.hint}>Нажмите карточку, чтобы увидеть перевод</i>
    </div>
  );
}

export { Card };
