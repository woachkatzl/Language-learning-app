import React from "react";

//Компоненты
import { ControlTable } from "../control-table";
import { Button } from "../ui-kit/button";

//Стили
import styles from "./mainContent.module.scss";
import blueButton from "../ui-kit/button/styles/blueBtn.module.scss";

function MainContent() {
  return (
    <div className={styles.container}>
      <Button type="button" text="Тренировка!" theme={blueButton} />
      <ControlTable />
    </div>
  );
}

export { MainContent };
