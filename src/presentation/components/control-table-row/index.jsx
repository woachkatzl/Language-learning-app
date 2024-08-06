import React, { useContext, useEffect, useState } from "react";

//components
import { Button } from "../../ui-kit/button";
import { TableInput } from "../../ui-kit/input-field";

//Context
import { WordsContext } from "../../../infrastructure/ServerWords";

//info
import { SpellCheck } from "../../../domain/info/SpellCheck";

//styles
import classNames from "classnames";
import styles from "./tableRow.module.scss";
import redBtn from "../../ui-kit/button/styles/redBtn.module.scss";
import yellowBtn from "../../ui-kit/button/styles/yellowBtn.module.scss";
import greenBtn from "../../ui-kit/button/styles/greenBtn.module.scss";
import blueBtn from "../../ui-kit/button/styles/blueBtn.module.scss";

//images
import editIcon from "../../ui-kit/button/icons/edit.svg";
import deleteIcon from "../../ui-kit/button/icons/delete.svg";
import saveIcon from "../../ui-kit/button/icons/save.svg";
import cancelIcon from "../../ui-kit/button/icons/cancel.svg";

function TableRow(props) {
  const { id, word, transcription, translation, topic, editMode } = props;
  const { deleteWord, updateWord } = useContext(WordsContext);

  //СОСТОЯНИЯ
  //Режим редактирования поля таблицы
  const [inEdit, setEditMode] = useState(editMode || false);

  //Состояние кнопки - активное/неактивное
  const [btnStatus, setBtnStatus] = useState(false);

  //Состояние для строк таблицы с полями ввода в режиме редактирования
  //Как это работает. В React элементы таблицы являются controlled components, т.е. их данные хранятся в состоянии компонента. Изначально мы задаём значения, которые отобразятся в каждом поле для редактирования, на основе полученных из пропсов. Слова справа - названия полей, указанные атрибутом name в условном рендеринге ниже.
  const [editField, setEditField] = useState({
    word: word,
    transcription: transcription,
    translation: translation,
    topic: topic,
  });

  //ЦИКЛЫ КОМПОНЕНТА
  //При изменении в любом из полей ввода формы, будет проверка на пустое поле. Если пустое, статус кнопки переходит в неактивный
  useEffect(() => {
    if (
      editField.word === "" ||
      editField.transcription === "" ||
      editField.translation === ""
    )
      setBtnStatus(true);
    else setBtnStatus(false);
  }, [editField]);

  //СОСТАВНЫЕ КЛАССЫ
  const buttonCell = classNames(styles.td, styles.buttonCell);
  const narrowCol = classNames(styles.td, styles.narrow);
  const wideCol = classNames(styles.td, styles.wide);

  //МЕТОДЫ
  //Метод для переключения в режим редактирования
  const editClick = (e) => {
    e.preventDefault();

    setEditMode(!inEdit);
  };

  //Метод для редактирования полей ввода. В режиме редактирования при изменении в полях ввода активизируется эта функция.
  const handleChange = (e) => {
    e.preventDefault();

    const value = e.target.value; //Getting the value in the target filed after it changed (typing)
    setEditField({
      ...editField, //This syntax copies all properties from the current editField object.
      [e.target.name]: value, //Поскольку это controlled component и отображаемые значения привязаны к состоянию компонента, мы обновляем состояние и задаём полученное выше значение в том поле, атрибут name которого соответствует тому же атрибуту изменённого (target) поля. Теперь изменеия тразятся на экране
    });
  };

  //Метод для сохранения редактированных слов - проверка ошибок и добавление на сервер
  const saveClick = (e) => {
    e.preventDefault();

    const isValidWord = SpellCheck.wordCheck.test(editField.word);
    const isValidTranslate = SpellCheck.translateCheck.test(
      editField.translation,
    );
    const isValidTopic = SpellCheck.topicCheck.test(editField.topic);

    if (isValidWord && isValidTranslate && isValidTopic) {
      updateWord(
        id,
        editField.word,
        editField.transcription,
        editField.translation,
        editField.topic,
      );

      setEditMode(!inEdit);
    } else
      alert(
        "Одно из полей ввода содержит ошибку. Пожалуйста, исправьте её и сохраните изменения",
      );
  };

  //Метод удаления слова
  const deleteClick = (e) => {
    e.preventDefault();

    deleteWord(id);
  };

  return (
    <>
      {inEdit ? (
        <form className={styles.tr}>
          <div className={styles.td}>{id}</div>
          <div className={narrowCol}>
            <TableInput
              value={editField.word}
              name="word"
              onChange={handleChange}
            />
          </div>
          <div className={narrowCol}>
            <TableInput
              value={editField.transcription}
              name="transcription"
              onChange={handleChange}
            />
          </div>
          <div className={wideCol}>
            <TableInput
              value={editField.translation}
              name="translation"
              onChange={handleChange}
            />
          </div>
          <div className={narrowCol}>
            <TableInput
              value={editField.topic}
              name="topic"
              onChange={handleChange}
            />
          </div>
          <div className={buttonCell}>
            <Button
              type="submit"
              icon={saveIcon}
              alt="Save icon"
              theme={greenBtn}
              isDisabled={btnStatus}
              onClick={saveClick}
            />
            <Button
              type="button"
              icon={cancelIcon}
              alt="Cancel icon"
              theme={blueBtn}
              onClick={editClick}
            />
          </div>
        </form>
      ) : (
        <div className={styles.tr}>
          <div className={styles.td}>{id}</div>
          <div className={narrowCol}>{word}</div>
          <div className={narrowCol}>{transcription}</div>
          <div className={wideCol}>{translation}</div>
          <div className={narrowCol}>{topic}</div>
          <div className={buttonCell}>
            <Button
              type="button"
              icon={editIcon}
              alt="Edit icon"
              theme={yellowBtn}
              onClick={editClick}
            />
            <Button
              type="button"
              icon={deleteIcon}
              alt="Delete icon"
              theme={redBtn}
              onClick={deleteClick}
            />
          </div>
        </div>
      )}
    </>
  );
}

export { TableRow };
