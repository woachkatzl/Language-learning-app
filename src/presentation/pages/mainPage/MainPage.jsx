import React from "react";

//Компоненты
import { ControlTable } from "../../components/control-table";

//Стили
import styles from "./mainPage.module.scss";

function MainPage() {
  return (
    <div className={styles.container}>
      <ControlTable />
    </div>
  );
}

export { MainPage };
