//React и библиотеки
import React from "react";
import { createRoot } from "react-dom/client";

//Компоненты
import { App } from "./App";

//Стили
import "./assets/styles/global.scss";

//Рендерим приложение во входном элементе 'root'
const root = createRoot(document.getElementById("root"));
root.render(<App></App>);
