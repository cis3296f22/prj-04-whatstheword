import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Board from "../Board";

function Reset({ setToQuit }) {
  return (
    <div>
      <div
        className="game-over bg-gray-200 rounded-sm hover:bg-gray-300 font-semibold h-10 cursor-pointer"
        onClick={(event) => setToQuit(true)}
      >
        Reset
      </div>
    </div>
  );
}

export default Reset;
