import { useEffect, useState } from "react";
import Game from "../Game";

const Menu = ({ onClick }) => (
  <div className="flex flex-col items-center w-100 pb-5">
    <button className="p-2 sm:p-4 bg-gray-200 hover:bg-gray-300 h-14 300 grid items-center rounded font-semibold cursor-pointer" onClick={onClick}>
      PLAY
    </button>
  </div>
);

export default Menu;