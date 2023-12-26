import React from "react";

//Компоненты
import { CardSlider } from "../../components/card-slider";

//Информация
import { words } from "../../../domain/info/wordsList";

//Стили
import styles from "./gamePage.module.scss";

function GamePage() {
  return (
    <div className={styles.container}>
      <CardSlider words={words} />
    </div>
  );
}

export { GamePage };
