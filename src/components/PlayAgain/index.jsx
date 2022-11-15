import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Game from "../Game";

function PlayAgain(props) {
    const[reset, setReset] = useState(false);

    return (
        <div className={"app dark:bg-zinc-800 blue:blue-dark red:red-dark purple:purple-dark"}> 
            <Button>Play Again</Button>
        </div>
    );
}

export default PlayAgain;