import React from "react";

//Компоненты
import { CardSlider } from "../../components/card-slider";

//Стили
import styles from "./gamePage.module.scss";

function GamePage() {
  return (
    <div className={styles.container}>
      <CardSlider />
    </div>
  );
}

export { GamePage };
