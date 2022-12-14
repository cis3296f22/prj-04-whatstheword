import { useEffect, useState } from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";

console.log("keyboard running");
const keyboard = {
  line1: "QWERTYUIOP",
  line2: "ASDFGHJKL",
  line3: "ZXCVBNM",
};

let defaultLetters = [];

"abcdefjhijklmnopqrstuvwxyz".split("").forEach((i) => {
  defaultLetters[i] = "";
});

/**
 * function to create the keys of the keyboard
 * @param {function} state - the changing of the display
 * @memberof Components
 * @returns the functionality of keyboard and its keys
 */
function Key(props) {
  const [state, setState] = useState("bg-gray-200 hover:bg-gray-300 " + 
                                      "dark:bg-zinc-400 dark:text-white dark:hover:bg-zinc-500" + 
                                      " blue:text-yellow blue:blue-keys" +
                                      " red:text-yellow red:red-keys" +
                                      " purple:text-yellow purple:purple-keys");

  const x = props.value.length === 1 ? "w-7 sm:w-10 " : "p-2 sm:p-4 ";
  const returnKey = () => {
    props.getKey(props.value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (props.state === "C") setState("bg-correct text-white");
      if (props.state === "E") setState("bg-exist text-white");
      if (props.state === "N") setState("bg-wrong text-white dark:bg-gray-600");
      if (props.state === "R") 
      {
        if (props.state === "C" || props.state === "E" || props.state === "N")
          setState("bg-gray-200 text-white");
      }
    }, 350);
  }, [props.state]);

  return (
    <button
      className={
        x +
        state +
        " h-14 300 grid items-center rounded font-semibold cursor-pointer"
      }
      onClick={returnKey}
    >
      {props.value === "DEL" ? <BackspaceIcon /> : props.value}
    </button>
  );
}

/**
 * function to create Account 
 * @param {String} letters - the letters of the keyboard
 * @returns the Keyboard and functionality
 */
function KeyBoard(props) {
  const [letters, setletters] = useState(defaultLetters);
  useEffect(() => {
    setletters(props.letters);
  }, [props.changed]);

  const keyHandler = (value) => {
    props.keyHandler(value);
  };
  return (
    <div className="flex flex-col items-center w-100 pb-5">
      <div className="flex gap-1 my-0.5 w-fit">
        {keyboard.line1.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={letters[value]}
          />
        ))}
      </div>
      <div className="flex gap-1 my-0.5 w-fit">
        {keyboard.line2.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={letters[value]}
          />
        ))}
      </div>
      <div className="flex gap-1 my-0.5 w-fit">
        <Key value="ENTER" getKey={keyHandler} />
        {keyboard.line3.split("").map((value, key) => (
          <Key
            getKey={keyHandler}
            value={value}
            key={key}
            state={letters[value]}
          />
        ))}
        <Key value="DEL" getKey={keyHandler} />
      </div>
    </div>
  );
}

export default KeyBoard;
