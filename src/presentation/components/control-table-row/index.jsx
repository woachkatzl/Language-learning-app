import React, { useState } from "react";

//components
import { Button } from "../../ui-kit/button";
import { TableInput } from "../../ui-kit/input-field";

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

  //Состояния
  const [inEdit, setEditMode] = useState(editMode || false);

  //Состояния для каждого поля ввода в режиме редактирования
  const [editWord, setEditWord] = useState(word);
  const [editTranscr, setEditTranscr] = useState(transcription);
  const [editTransl, setEditTransl] = useState(translation);
  const [editTopic, setEditTopic] = useState(topic);

  //Составные классы
  const buttonCell = classNames(styles.td, styles.buttonCell);
  const narrowCol = classNames(styles.td, styles.narrow);
  const wideCol = classNames(styles.td, styles.wide);

  //Методы
  const editClick = (e) => {
    e.preventDefault();

    setEditMode(!inEdit);
  };

  //Методы для редактирования полей ввода
  const wordInEdit = (e) => {
    e.preventDefault();
    setEditWord(e.target.value);
  };
  const transcrInEdit = (e) => {
    e.preventDefault();
    setEditTranscr(e.target.value);
  };
  const translInEdit = (e) => {
    e.preventDefault();
    setEditTransl(e.target.value);
  };
  const topicInEdit = (e) => {
    e.preventDefault();
    setEditTopic(e.target.value);
  };

  return (
    <>
      {inEdit ? (
        <form className={styles.tr}>
          <div className={styles.td}>{id}</div>
          <div className={narrowCol}>
            <TableInput value={editWord} type="text" onChange={wordInEdit} />
          </div>
          <div className={narrowCol}>
            <TableInput
              value={editTranscr}
              type="text"
              onChange={transcrInEdit}
            />
          </div>
          <div className={wideCol}>
            <TableInput
              value={editTransl}
              type="text"
              onChange={translInEdit}
            />
          </div>
          <div className={narrowCol}>
            <TableInput value={editTopic} type="text" onChange={topicInEdit} />
          </div>
          <div className={buttonCell}>
            <Button
              type="button"
              icon={saveIcon}
              alt="Save icon"
              theme={greenBtn}
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
            />
          </div>
        </div>
      )}
    </>
  );
}

export { TableRow };
