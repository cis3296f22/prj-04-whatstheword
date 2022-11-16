import { useCallback, useState, useEffect } from "react";
import Board from "../Board";
import Error from "../Error";
import Help from "../Help";
import KeyBoard from "../KeyBoard";
import Menu from "../Menu";
import Modal from "../Modal";
import NavBar from "../NavBar";
import styles from "./style.module.css";
import { useMainMenu } from "./useMainMenu";

const DEFAULT_WORD_LENGTH = 5;

// Putting the WhatstheWord Game together, using the other components (Board, Keyboard, etc) together
function Game(props) {
  const [mainMenu, setMainMenu, hideMainMenu] = useMainMenu();
  const [length, setLength] = useState(DEFAULT_WORD_LENGTH);
  const [letter, setLetter] = useState();
  const [changed, setChanged] = useState(false);
  const [letters, setLetters] = useState({});
  const [help, setHelp] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [error, setError] = useState("");
  const [dark, setDark] = useState(false);
  const [blue, setBlue] = useState(false);
  const [red, setRed] = useState(false);
  const [purple, setPurple] = useState(false);

  const start = () => hideMainMenu();

  // Changes length of word
  const changeLength4 = () => {
    setLength(4);
  }
  const changeLength5 = () => {
    setLength(5);
  }
  const changeLength6 = () => {
    setLength(6);
  }

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
      {error && <Error>{error}</Error>}
      <div className={styles.game}>
        <NavBar help={setHelp} darkness={setDark} dark={dark} blueness={setBlue} blue={blue} redness={setRed} red={red} purpleness={setPurple} purple={purple} />
        {mainMenu ? (
          <div>
            <Menu onClick={start} changeLength4={changeLength4} changeLength5={changeLength5} changeLength6={changeLength6}/>
          </div>
        ) : (
          <div>
            <hr />
            <Board
              length={length}
              letter={letter}
              clicks={clicked}
              letters={LettersHandler}
              error={setError}
            />
            <KeyBoard keyHandler={keyHandler} letters={letters} changed={changed} />
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
