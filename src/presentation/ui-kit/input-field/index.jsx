import React from "react";

//Стили
import styles from "./tableInput.module.scss";

function TableInput(props) {
  const { value, ...otherProps } = props;

  return <input className={styles.formInput} type="text" value={value} />;
}

export { TableInput };
