import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Board from "../Board";

let defaultBoard = [];
let defaultLetters = [];

function PlayAgain(props) {
    const [letters, setLetters] = useState(defaultLetters);
    const [board, setBoard] = useState(defaultBoard);
    const [attempts, setAttempts] = useState(1);
    const [score, setScore] = useState(0);
    const [reset, setReset] = useState(false);
    
    /*useEffect(() => {
        if (props.reset === "true") {
            React.createElement("Board", null, null);
        }
    })*/

    return (
        <div className={""}> 
            <Button
            >Play Again</Button>
        </div>
    );
}

export default PlayAgain;