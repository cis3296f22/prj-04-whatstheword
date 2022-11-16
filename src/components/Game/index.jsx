import { useState, useEffect } from "react";
import Board from "../Board";
import Error from "../Error";
import Help from "../Help";
import KeyBoard from "../KeyBoard";
import Modal from "../Modal";
import NavBar from "../NavBar";
import Leaderboard from "../Leaderboard";
import styles from "./style.module.css";

// Putting the WhatstheWord Game together, using the other components (Board, Keyboard, etc) together
function Game(props) {
  const [letter, setLetter] = useState();
  const [changed, setChanged] = useState(false);
  const [letters, setLetters] = useState({});
  const [help, setHelp] = useState(false);
  const [leaderboard, setLeaderboard] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [error, setError] = useState("");
  const [dark, setDark] = useState(false);
  const [blue, setBlue] = useState(false);
  const [red, setRed] = useState(false);
  const [purple, setPurple] = useState(false);
  const[score, setScore] = useState(0);


  // Putting the input, the letters, in order to guess and enter the word
  const onClickDown = (event) => {
    if (event.key == "Enter") {
      setLetter("ENTER");
      setClicked(clicked + 1);
    } else if (event.key == "Backspace") {
      setLetter("DEL");
      setClicked(clicked + 1);
    } else if ("abcdefghijklmnopqrstuvwxyz".includes(event.key.toLowerCase())) {
      setLetter(event.key.toUpperCase());
      setClicked(clicked + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onClickDown);

    return () => window.removeEventListener("keydown", onClickDown);
  });

  useEffect(() => {
    props.darkness(dark);
  }, [dark]);

  useEffect(() => {
    props.blueness(blue);
  }, [blue]);

  useEffect(() => {
    props.redness(red);
  }, [red]);

  useEffect(() => {
    props.purpleness(purple);
  }, [purple]);

  // Color change for the letters entered in for board and displayed keyoard
  const keyHandler = (letterValue) => {
    setLetter(letterValue);
    setClicked(clicked + 1);
  };
  const LettersHandler = (lettersValue) => {
    setLetters(lettersValue);
    setChanged(!changed);
  };
  return (
    <>
      {help && (
        <Modal title="How to play!" help={setHelp}>
          {" "}
          <Help />{" "}
        </Modal>
      )}

      {leaderboard && (
        <Modal title="Personal Leaderboard" leaderboard={setLeaderboard}>
          {" "}
          <Leaderboard />{" "}
        </Modal>
      )}

      {error && <Error>{error}</Error>}
      <div className={styles.game}>
        <NavBar help={setHelp} leaderboard={setLeaderboard} darkness={setDark} dark={dark} blueness={setBlue} blue={blue} redness={setRed} red={red} purpleness={setPurple} purple={purple} />
        <hr />
        <Board
          letter={letter}
          clicks={clicked}
          letters={LettersHandler}
          error={setError}
          score={setScore}
        />
        <KeyBoard keyHandler={keyHandler} letters={letters} changed={changed} />
      </div>
    </>
  );
}

export default Game;
