import { useCallback, useEffect, useState } from "react";
import Game from "../Game";

function Menu({ onClick, changeLength4, changeLength5, changeLength6 }) {
  return (
    <div className="flex flex-col items-center w-100 pb-5">
    <div>
      <input className="big" type="radio" name="length" onChange={changeLength4} value={4} /> 4
      <input type="radio" name="length" onChange={changeLength5} value={5} /> 5
      <input type="radio" name="length" onChange={changeLength6} value={6} /> 6
    </div>
    <button className="p-2 sm:p-4 bg-gray-200 hover:bg-gray-300 h-14 300 grid items-center rounded font-semibold cursor-pointer" onClick={onClick}>
      PLAY
    </button>
    </div>
  )
}

export default Menu