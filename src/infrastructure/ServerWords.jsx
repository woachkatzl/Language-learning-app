import React, { createContext, useEffect, useState } from "react";

//It's a good practice to provide initial value of the context object that matches the expected data structure
const WordsContext = createContext({
  words: [],
  getWords: () => {},
  isLoading: true,
  error: null,
});

//Creating a context component that would have all the necessary logic accessible throughout the app.
const WordsContextProvider = (props) => {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); //Creating an error state, so that a type of error can be set and exported within the context.

  const getWords = () => {
    fetch("https://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) return response.json();
        else if (response.status === 404) throw new Error("404");
        else throw new Error("Other error");
      })
      .then((data) => {
        setWords(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.message === "404") {
          setError("404 страница не найдена");
          console.log("Error: 404 page not found");
        } else {
          setError("Ошибка: что-то пошло не так...");
          console.log("An error occured: ", error.message);
        }
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <WordsContext.Provider value={{ words, getWords, isLoading, error }}>
      {props.children}
    </WordsContext.Provider>
  );
};

export { WordsContextProvider, WordsContext };
