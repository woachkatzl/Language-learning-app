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
  const { words, initWord, initWordCount, learnedWords } = props;

  //Состояния
  //Изменение индекса карточки
  const [wordIndex, setWordIndex] = useState(initWord || 0);

  //Переворачивание карточки
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    setIsFlipped(false); //сбрасывает переворот карточки при смене индекса
  }, [wordIndex]);

  //Количество выученных слов
  const [wordsCount, setWordsCount] = useState(initWordCount || 0);
  useEffect(() => console.log("Выученных слов: " + wordsCount), [wordsCount]);

  //Список айди выученных слов
  const [wordsLearned, setWordsLearned] = useState(learnedWords || []);

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

  const handleCardClick = (wordId) => {
    setIsFlipped(!isFlipped);

    //Если после переворота карточка на стороне с переводом и её айди ещё нет в списке выученных слов, кол-во выученных слов увеличится и айди этого слова добавится в список
    if (!isFlipped && !wordsLearned.find((word) => word == wordId)) {
      setWordsCount((prevCount) => prevCount + 1);
      setWordsLearned((prevWords) => [...prevWords, wordId]);
    }
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
        key={words[wordIndex].id}
        word={words[wordIndex].english}
        transcription={words[wordIndex].transcription}
        translation={words[wordIndex].russian}
        id={words[wordIndex].id}
        isFlipped={isFlipped}
        handleClick={() => handleCardClick(words[wordIndex].id)}
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
