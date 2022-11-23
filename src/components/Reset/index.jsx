import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Board from "../Board";

function Reset({handleResetClick}) {

    return (
        <div> 
            <div 
                className="game-over bg-gray-200 rounded-sm hover:bg-gray-300 font-semibold h-10 cursor-pointer"
                onClick={event => handleResetClick(true, 0)}
            >Reset</div>
        </div>
    );
}

export default Reset;