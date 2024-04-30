import React, { createContext, useEffect, useState } from "react";

//It's a good practice to provide initial value of the context object that matches the expected data structure
const WordsContext = createContext({ words: [], getWords: () => {} });

const WordsContextProvider = (props) => {
  const [words, setWords] = useState([]);

  const getWords = () => {
    fetch("https://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then((data) => setWords(data))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <WordsContext.Provider value={{ words, getWords }}>
      {props.children}
    </WordsContext.Provider>
  );
};

export { WordsContextProvider, WordsContext };
