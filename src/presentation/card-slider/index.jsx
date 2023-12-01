import React, { useState, useEffect } from "react";

//Компоненты
import { Card } from "../card";
import { Button } from "../ui-kit/button";

//Стили
import styles from "./cardSlider.module.scss";
import yellowBtn from "../ui-kit/button/styles/yellowBtn.module.scss";

//Изображения
import rightArrow from "../ui-kit/button/icons/right-arrow.svg";
import leftArrow from "../ui-kit/button/icons/left-arrow.svg";

function CardSlider(props) {
  const { words, initWord } = props;

  //Состояния
  const [wordIndex, setWordIndex] = useState(initWord || 0);

  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    setIsFlipped(false); //сбрасывает переворот карточки при смене индекса
  }, [wordIndex]);

  //Методы
  const handleRightClick = (e) => {
    e.preventDefault();

    setWordIndex((prevIndex) => {
      if (prevIndex === words.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handleLeftClick = (e) => {
    e.preventDefault();

    setWordIndex((prevIndex) => {
      if (prevIndex === 0) {
        return words.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className={styles.container}>
      <Button
        type="button"
        theme={yellowBtn}
        icon={leftArrow}
        alt="Previous card button"
        onClick={handleLeftClick}
      />
      <Card
        word={words[wordIndex].english}
        transcription={words[wordIndex].transcription}
        translation={words[wordIndex].russian}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />
      <Button
        type="button"
        theme={yellowBtn}
        icon={rightArrow}
        alt="Next card button"
        onClick={handleRightClick}
      />
    </div>
  );
}

CardSlider.defaultProps = {
  words: [
    {
      english: "Пример слова",
      transcription: "[транскрипция]",
      russian: "перевод",
    },
  ],
};

export { CardSlider };
