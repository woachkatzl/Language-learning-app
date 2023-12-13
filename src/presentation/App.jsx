import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import { Header } from "./header";
import { MainPage } from "./pages/mainPage/MainPage";
import { GamePage } from "./pages/gamePage/GamePage";
import { Footer } from "./footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export { App };
