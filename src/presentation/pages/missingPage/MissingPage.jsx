import React from "react";
import { Link } from "react-router-dom";

//images
import missingImg from "./assets/letters.gif";

//styles
import styles from "./missingPage.module.scss";

function MissingPage() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Ой, это вы куда-то не туда зашли...</p>
      <h2 className={styles.title}>404</h2>
      <h3 className={styles.subTitle}>Страница не найдена</h3>
      <img src={missingImg} alt="Падающие буквы" />
      <p className={styles.text}>
        Попробуйте{" "}
        <Link className={styles.link} to="/">
          вернуться на главную
        </Link>{" "}
        страницу.
      </p>
    </div>
  );
}

export { MissingPage };
