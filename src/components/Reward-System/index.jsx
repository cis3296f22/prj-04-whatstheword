import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DescriptionIcon from "@mui/icons-material/Description";
import { useEffect, useState } from "react";
import Box from "../Box";
import words from "../../words";

// Gets the correct letter
// selects and displays a correct letter 
// Displays inside of Settings

// If green letter, goes display the correct letter on to the next letter that is not green
// Leaves the correct letters up for the next attempt available and will remove itself after that attempt
// If the user has one letter left and they use a letter hint, it will finish the game for them 

function Letter_Hint(props) {
    const [letters, setletters] = useState(defaultLetters);
    const [changed, setChanged] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (props.clicks !== 0) 
        {
            if (words.includes(word.toLowerCase())) {
                for (let i = 0; i < 5; i++) {
                  if (correct[i] === prevBoard[row][i][0]) {
                    prevBoard[row][i][1] = "C";
                    correctLetters++;
                    // console.log(prevBoard);
                    console.log(prevBoard[row][i]);
                  } else if (correct.includes(prevBoard[row][i][0])) 
                  {
                    prevBoard[row][i][1] = "E";
                    console.log(prevBoard[row][i]);
                  }
                  else {
                    prevBoard[row][i][1] = "N";
                    console.log(prevBoard[row][i]);
                  }
                }
            }
        }
    });

    return {

    }
}

export default Reward_System;