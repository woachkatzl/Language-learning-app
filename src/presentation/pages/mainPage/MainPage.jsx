import React from "react";

//Компоненты
import { ControlTable } from "../../components/control-table";

//Информация
import { words } from "../../../domain/info/wordsList";

//Стили
import styles from "./mainPage.module.scss";

function MainPage() {
  return (
    <div className={styles.container}>
      <ControlTable words={words} />
    </div>
  );
}

export { MainPage };
