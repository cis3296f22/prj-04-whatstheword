import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Board from "../Board";
/**
 * resets to main menu when play again button is clicked
 * @param {function} props.setToPlayAgain - passes true when clicked
 * @memberof Components
 * @returns a div for the playAgain button
 */
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
