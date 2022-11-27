import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Board from "../Board";

function PlayAgain({ setToPlayAgain }) {
  return (
    <div>
      <div
        className="game-over bg-gray-200 rounded-sm hover:bg-gray-300 font-semibold h-10 cursor-pointer mb-2"
        onClick={(event) => setToPlayAgain(true)}
      >
        Play Again
      </div>
    </div>
  );
}

export default PlayAgain;
