import React from "react";

//styles
import styles from "./styles/button.module.scss";
import iconButton from "./styles/iconButton.module.scss";
import textButton from "./styles/textButton.module.scss";
import inactiveButton from "./styles/disabled.module.scss";
import classNames from "classnames";

function Button(props) {
  const { type, text, icon, alt, onClick, theme, isDisabled } = props;

  //Составные классы
  const btn = classNames(styles.button, theme?.button, {
    [iconButton.button]: icon, //Если сожержание кнопки - иконка, к ней будут применены специальные стили
    [textButton.button]: text, //Если сожержание кнопки - текст, к ней будут применены специальные стили
    [inactiveButton.button]: isDisabled, //Если кнопка неактивна, к ней будут применены специальные стили
  });

  return (
    <button disabled={isDisabled} className={btn} type={type} onClick={onClick}>
      {icon && <img className={iconButton.icon} src={icon} alt={alt} />}
      {text && <span>{text}</span>}
    </button>
  );
}

export { Button };
