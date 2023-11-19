import React, { useState } from "react";

//Компоненты
import { ControlTable } from "../control-table";
import { Button } from "../ui-kit/button";
import { CardSlider } from "../card-slider";

//Информация
import { words } from "../../domain/info/wordsList";

//Стили
import styles from "./mainContent.module.scss";
import blueButton from "../ui-kit/button/styles/blueBtn.module.scss";

function MainContent(props) {
  const { practiceMode } = props;

  //Состояния
  const [flashCards, setPracticeMode] = useState(practiceMode || false);

  //Методы
  const handleClick = (e) => {
    e.preventDefault();

    setPracticeMode(!flashCards);
  };

  return (
    <>
      {flashCards ? (
        <div className={styles.container}>
          <CardSlider words={words} />
          <Button
            type="button"
            text="Вернуться к таблице"
            theme={blueButton}
            onClick={handleClick}
          />
        </div>
      ) : (
        <div className={styles.container}>
          <Button
            type="button"
            text="Тренировать слова!"
            theme={blueButton}
            onClick={handleClick}
          />
          <ControlTable />
        </div>
      )}
    </>
  );
}

export { MainContent };
