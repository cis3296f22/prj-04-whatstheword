import { useEffect, useState } from "react";
import Box from "../Box";
import Score from "../Score";
import words from "../../words";

const defaultLetters = [];
"abcdefghijklmnopqrstuvwxyz".split("").forEach((i) => {
  defaultLetters[i] = "";
});

export const chooseCorrectWord = (wordLength) => {
  const wordIndex = Math.round(Math.random() * (words[wordLength].length - 1));
  return words[wordLength][wordIndex].toUpperCase();
};

const generateDefaultBoard = (wordLength) => {
  const defaultBoard = [];
  for (let i = 0; i < wordLength + 1; i++) {
    defaultBoard.push([]);
    for (let j = 0; j < wordLength; j++) {
      defaultBoard[i].push(["", ""]);
    }
  }
  return defaultBoard;
};

// const letter --> the clickable text (Delete, Enter)
// const board --> the display of the board (Connected with row)
// const changed --> changes to the board
// const row --> the rows of the board
// const col --> The current attempt of word
// const message --> Relays message to display

function Board(props) {
  const [wordLength, setWordLength] = useState(props.length);
  const [correctWord, setCorrectWord] = useState(chooseCorrectWord(wordLength));
  const [board, setBoard] = useState(generateDefaultBoard(wordLength));
  useEffect(() => {
    console.log("generating new board for wordLength:", wordLength);
    setBoard(generateDefaultBoard(wordLength));
    const newCorrectWord = chooseCorrectWord(wordLength);
    console.log("setting newCorrectWord:", newCorrectWord);
    setCorrectWord(newCorrectWord);
  }, [wordLength]);

  const [letters, setLetters] = useState(defaultLetters);
  const [changed, setChanged] = useState(false);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);
  const [message, setMessage] = useState("");
  // Set initial value to undefined, since validation hasn't run yet
  const [valid, setValid] = useState(undefined);
  // Scoring feature
  const [attempts, setAttempts] = useState(1);
  const [score, setScore] = useState(0);
  var scoring = 0;

  // Keep existing Effect hook

  useEffect(() => {
    console.log("Clicks effect hook");
    // Create an async function that can await fetch() & response.json() calls
    const checkWord = async (prevBoard) => {
      let word = "";
      for (let i = 0; i < wordLength; i++) {
        word += prevBoard[row][i][0];
      }

      const response = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + word.toLowerCase()
      );
      const data = await response.json();

      if (data.title == "No Definitions Found") {
        console.log("Unsuccessful dictionary validation");
        setValid(false);
      } else {
        console.log("Successful dictionary validation");
        setValid(true);
      }
    };

    if (win || lost) {
      console.log("Game ended!");
    } else {
      if (props.clicks !== 0) {
        if (props.letter === "DEL") {
          setCol(col === 0 ? 0 : col - 1);
          setBoard((prevBoard) => {
            prevBoard[row][col === 0 ? 0 : col - 1][0] = "";
            return prevBoard;
          });
        } else {
          setBoard((prevBoard) => {
            if (col < wordLength) {
              if (props.letter !== "ENTER") {
                prevBoard[row][col][0] = props.letter;
                setCol(col + 1);
                setValid(undefined);
              } else {
                props.error(`Words are ${wordLength} letters long!`);
                setTimeout(() => {
                  props.error("");
                }, 1000);
              }
            } else {
              if (props.letter === "ENTER") {
                // Call async function defined above
                checkWord(prevBoard);
              }
            }
            return prevBoard;
          });
        }
      }
    }
  }, [props.clicks, wordLength]);

  // Add new Effect Hook that depends on valid value
  useEffect(() => {
    console.log("Valid effect hook");
    const prevBoard = board;
    let correctLetters = 0;
    // TODO - remove debug console.log() line below
    console.log("is Valid?", valid);
    if (valid) {
      for (let i = 0; i < wordLength; i++) {
        if (correctWord[i] === prevBoard[row][i][0]) {
          prevBoard[row][i][1] = "C";
          correctLetters++;
        } else if (correctWord.includes(prevBoard[row][i][0]))
          prevBoard[row][i][1] = "E";
        else prevBoard[row][i][1] = "N";
        setRow(row + 1);
        setAttempts(attempts + 1);
        if (row === wordLength) {
          setLost(true);
          setScore(0);
          console.log("Score: " + scoring);
          console.log("Attempts: " + attempts);
          setTimeout(() => {
            setMessage(`It was ${correctWord}`);
          }, 750);
        }

        setCol(0);
        setLetters((prev) => {
          prev[board[row][i][0]] = board[row][i][1];
          return prev;
        });
      }
      setChanged(!changed);

      if (correctLetters === wordLength) {
        setWin(true);
        switch (attempts) {
          case 1:
            scoring = score + 300;
            setScore(scoring);
            break;
          case 2:
            scoring = score + 250;
            setScore(scoring);
            break;
          case 3:
            scoring = score + 200;
            setScore(scoring);
            break;
          case 4:
            scoring = score + 150;
            setScore(scoring);
            break;
          case 5:
            scoring = score + 100;
            setScore(scoring);
            break;
          case 6:
            scoring = score + 50;
            setScore(scoring);
            break;
        }
        console.log("Score: " + scoring);
        console.log("Attempts: " + attempts);
        setTimeout(() => {
          setMessage("You WIN");
        }, 750);
      }
      return prevBoard;
    } else if (valid === false) {
      props.error("Word not in dictionary");
      setTimeout(() => {
        props.error("");
      }, 1000);
    }
  }, [valid, wordLength, correctWord]);

  useEffect(() => {
    props.letters(letters);
  }, [changed]);

  return (
    <div className="px-10 py-5 grid gap-y-1 items-center w-100 justify-center">
      <Score score={score} attempts={attempts} />
      {board.map((row, key) => {
        return (
          <div key={key} className="flex gap-1 w-fit" data-testid="row">
            {row.map((value, key) => (
              <Box key={key} value={value[0]} state={value[1]} pos={key} />
            ))}
          </div>
        );
      })}
      <div className=" grid place-items-center h-8 font-bold dark:text-white blue:text-yellow red:text-yellow purple:text-yellow">
        {lost || win ? message : ""}
      </div>
    </div>
  );
}

export default Board;
