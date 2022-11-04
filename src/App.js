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
  
  return (
    <div className={"app dark:bg-zinc-800"}> 
      <Game darkness={darkHandler} />
    </div>
  );
}

export default App;
