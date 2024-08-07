import React from "react";

//Компоненты
import { ControlTable } from "../../components/control-table";
import { Button } from "../../ui-kit/button";

//Стили
import styles from "./mainPage.module.scss";
import greenBtn from "../../ui-kit/button/styles/greenBtn.module.scss";

function MainPage() {
  return (
    <div className={styles.container}>
      <ControlTable />
      <Button text="Добавить слово" type="button" theme={greenBtn}></Button>
    </div>
  );
}

export { MainPage };
