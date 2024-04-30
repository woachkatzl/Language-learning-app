import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import { Header } from "./header";
import { MainPage } from "./pages/mainPage/MainPage";
import { GamePage } from "./pages/gamePage/GamePage";
import { MissingPage } from "./pages/missingPage/MissingPage";
import { Footer } from "./footer";

//context
import { WordsContextProvider } from "../infrastructure/ServerWords";

function App() {
  return (
    <WordsContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
        <Footer />
      </Router>
    </WordsContextProvider>
  );
}

export { App };
