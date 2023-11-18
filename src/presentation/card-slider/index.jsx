import React from "react";

//Компоненты
import { Card } from "../card";
import { Button } from "../ui-kit/button";

//Стили
import styles from "./cardSlider.module.scss";
import yellowBtn from "../ui-kit/button/styles/yellowBtn.module.scss";

//Изображения
import rightArrow from "../ui-kit/button/icons/right-arrow.svg";
import leftArrow from "../ui-kit/button/icons/left-arrow.svg";

function CardSlider() {
  return (
    <div className={styles.container}>
      <Button
        type="button"
        theme={yellowBtn}
        icon={leftArrow}
        alt="Previous card button"
      />
      <Card />
      <Button
        type="button"
        theme={yellowBtn}
        icon={rightArrow}
        alt="Next card button"
      />
    </div>
  );
}

export { CardSlider };
