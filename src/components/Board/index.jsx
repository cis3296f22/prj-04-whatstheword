import { useEffect, useState } from "react";
import Box from "../Box";
import words from "../../words";

const correct =
  words[Math.floor(Math.random() * words.length - 1)].toUpperCase();
let defaulBoard = [];
let defaultLetters = [];

console.log("The Correct Word is: " + correct);

"abcdefghijklmnopqrstuvwxyz".split("").forEach((i) => {
  defaultLetters[i] = "";
});

// 6 attempts for the game board
for (let i = 0; i < 6; i++) {
  defaulBoard.push([]);
  for (let j = 0; j < 5; j++) {
    defaulBoard[i].push(["", ""]);
  }
}

// const letter --> the clickable text (Delete, Enter)
// const board --> the display of the board (Connected with row)
// const changed --> changes to the board
// const row --> the rows of the board
// const col --> The current attempt of word
// const message --> Relays message to display

function Board(props) {
  const [letters, setLetters] = useState(defaultLetters);
  const [board, setBoard] = useState(defaulBoard);
  const [changed, setChanged] = useState(false);
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [win, setWin] = useState(false);
  const [lost, setLost] = useState(false);
  const [message, setMessage] = useState("");
  // Set initial value to undefined, since validation hasn't run yet
  const [valid, setValid] = useState(undefined);


  // Keep existing Effect hook

  useEffect(() => {
    // Create an async function that can await fetch() & response.json() calls
    const checkWord = async (prevBoard) => {
      let word = "";
      for (let i = 0; i < 5; i++) {
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
            if (col < 5) {
              if (props.letter !== "ENTER") {
                prevBoard[row][col][0] = props.letter;
                setCol(col + 1);
              } else {
                props.error("Words are 5 letters long!");
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
  }, [props.clicks]);

  // Add new Effect Hook that depends on valid value
  useEffect(() => {
    const prevBoard = board;
    let correctLetters = 0;
    // TODO - remove debug console.log() line below
    console.log(valid);
    if (valid) {
      for (let i = 0; i < 5; i++) {
        if (correct[i] === prevBoard[row][i][0]) {
          prevBoard[row][i][1] = "C";
          correctLetters++;
        } else if (correct.includes(prevBoard[row][i][0]))
          prevBoard[row][i][1] = "E";
        else prevBoard[row][i][1] = "N";
        setRow(row + 1);
        if (row === 5) {
          setLost(true);
          setTimeout(() => {
            setMessage(`It was ${correct}`);
          }, 750);
        }

        setCol(0);
        setLetters((prev) => {
          prev[board[row][i][0]] = board[row][i][1];
          return prev;
        });
      }
      setChanged(!changed);

      if (correctLetters === 5) {
        setWin(true);
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
  }, [valid]);

  useEffect(() => {
    props.letters(letters);
  }, [changed]);

  return (
    <div className="px-10 py-5 grid gap-y-1 items-center w-100 justify-center">
      {board.map((row, key) => {
        return (
          <div key={key} className="flex gap-1 w-fit">
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
