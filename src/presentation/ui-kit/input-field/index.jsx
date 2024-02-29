import React, { memo } from "react";

//Стили
import styles from "./tableInput.module.scss";
import classNames from "classnames";

const TableInput = memo(function TableInput(props) {
  const { value, type, isEmpty, ...otherProps } = props;

  const input = classNames(styles.formInput, {
    [styles.emptyInput]: isEmpty,
  });
  return <input className={input} type={type} value={value} {...otherProps} />;
});

TableInput.defaultProps = {
  type: "text",
};

export { TableInput };
