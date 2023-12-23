import React, { useEffect, useRef } from "react";

//Стили
import styles from "./card.module.scss";

function Card(props) {
  const { word, transcription, translation, id, isFlipped, handleClick } =
    props;

  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current.focus();
  }, [word, transcription, translation, isFlipped]);

  return (
    <div
      className={styles.card}
      onClick={() => handleClick(id)}
      ref={cardRef}
      tabIndex="0"
    >
      <h2 className={styles.word}>{word}</h2>
      <p>{transcription}</p>
      {isFlipped && <p className={styles.translation}>{translation}</p>}
      <i className={styles.hint}>Нажмите карточку, чтобы увидеть перевод</i>
    </div>
  );
}

export { Card };
