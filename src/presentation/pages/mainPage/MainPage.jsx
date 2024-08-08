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
  const { isLoading, error, addWord } = useContext(WordsContext);

  const addClick = (e) => {
    e.preventDefault();

    setIsAdding(true);

    //test for adding word method
    //addWord("test", "[test]", "тест", "test");
  };

  if (isLoading) return <div>Идёт загрузка</div>;

  if (error) return <div>{error}</div>;

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
