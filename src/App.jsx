import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from './components/common/Header/Header';
import Hero from "./components/common/Hero/Hero";
import Shortener from "./components/common/Shortener/Shortener";
import Home from './pages/Home';

function App() {
  return (
    <>
     <Home/>
    </>
  );
}

export default App;
