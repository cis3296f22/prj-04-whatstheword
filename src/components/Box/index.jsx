import { useEffect, useState } from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";

// Properties of the game board (color)
function Box(props) {
  const [state, setState] = useState("text-black border-2 border-gray-300 dark:text-white blue:text-yellow red:text-yellow purple:text-yellow rounded");

  useEffect(() => {
    setTimeout(() => {
      if (props.state === "C")
        setState("bg-correct text-white");
      if (props.state === "E")
        setState("bg-exist text-white");
      if (props.state === "N")
        setState("bg-wrong text-white dark:bg-gray-600");
    }, 125 * props.pos);
  }, [props.state]);

  return (
    <div
      className={
        "h-12 w-12 sm:w-14 sm:h-14 grid place-items-center p-0 m-0 font-bold text-2xl rounded-sm " + state
      }
    >
      {props.value === "DEL" ? <BackspaceIcon /> : props.value}
    </div>
  );
}

export default Box;
