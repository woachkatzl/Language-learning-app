import React from "react";

//Компоненты
import { Card } from "../card";

//Стили
import styles from "./cardSlider.module.scss";

function CardSlider() {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  );
}

export { CardSlider };
