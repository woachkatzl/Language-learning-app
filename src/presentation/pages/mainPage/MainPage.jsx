import React, { useContext, useState } from "react";

//Компоненты
import { ControlTable } from "../../components/control-table";
import { Button } from "../../ui-kit/button";

//Стили
import styles from "./mainPage.module.scss";
import greenBtn from "../../ui-kit/button/styles/greenBtn.module.scss";

//Context
import { WordsContext } from "../../../infrastructure/ServerWords";

function MainPage() {
  const [isAdding, setIsAdding] = useState(false);
  const { isLoading, loadingError } = useContext(WordsContext);

  const addClick = (e) => {
    e.preventDefault();

    setIsAdding(true);
  };

  if (isLoading)
    return (
      <div className={styles.noContent}>
        <div className={styles.loadContainer}>
          <div className={styles.loadingState}>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    );

  if (loadingError)
    return (
      <div className={styles.noContent}>
        <p>{loadingError}</p>
      </div>
    );

  return (
    <div className={styles.container}>
      <ControlTable isAdding={isAdding} setIsAdding={setIsAdding} />
      <Button
        text="Добавить слово"
        type="button"
        theme={greenBtn}
        onClick={addClick}
        isDisabled={isAdding}
      ></Button>
    </div>
  );
}

export { MainPage };
