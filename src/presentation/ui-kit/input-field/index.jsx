import React from "react";

//Стили
import styles from "./tableInput.module.scss";

function TableInput(props) {
  const { value, type, ...otherProps } = props;

  return (
    <input
      className={styles.formInput}
      type={type}
      value={value}
      {...otherProps}
    />
  );
}

TableInput.defaultProps = {
  type: "text",
};

export { TableInput };
