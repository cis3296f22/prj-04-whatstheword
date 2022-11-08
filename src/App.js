import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

// App.js gives the ability for night/light mode of App
// Game is from the Game Class is the main component for WhatsTheWord to run 

function App() {
  const darkHandler = (dark) => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

  };

  const blueHandler = (blue) => {
    if (blue) document.documentElement.classList.add("blue");
    else document.documentElement.classList.remove("blue");
  };

  const redHandler = (red) => {
    if (red) document.documentElement.classList.add("red");
    else document.documentElement.classList.remove("red");
  };

  const purpleHandler = (purple) => {
    if (purple) document.documentElement.classList.add("purple");
    else document.documentElement.classList.remove("purple");
  };
  
  return (
    <div className={"app dark:bg-zinc-800 blue:blue-dark red:red-dark purple:purple-dark"}> 
      <Game darkness={darkHandler} blueness={blueHandler} redness={redHandler} purpleness={purpleHandler} />
    </div>
  );
}

export default App;
