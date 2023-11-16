import React, { useState } from "react";

//Стили
import styles from "./card.module.scss";

function Card(props) {
  const { word, transcription, translation } = props;

  //Cостояния
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <h2 className={styles.word}>{word}</h2>
      <p>{transcription}</p>
      {flipped && <p className={styles.translation}>{translation}</p>}
      <i className={styles.hint}>Нажмите карточку, чтобы увидеть перевод</i>
    </div>
  );
}

Card.defaultProps = {
  word: "to sample",
  transcription: "[tə ˈsæmpəl]",
  translation: "попробовать",
};

export { Card };
