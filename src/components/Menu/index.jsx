import { useCallback, useEffect, useState } from "react";
import Game from "../Game";

function Menu({ onClick, changeLength4, changeLength5, changeLength6 }) {
  return (
    <div className="flex flex-col items-center w-100 pb-5 gap-5">
      <h2 className="text-2xl">Word Length</h2>
      <container>
        <ul class="items-center w-full flex gap-1">
            <li>
                <input type="radio" id="four" name="length" value="four" class="hidden peer" onChange={changeLength4}/>
                <label for="four" class="p-2 sm:p-4 bg-gray-200 hover:bg-gray-300 h-14 300 grid items-center rounded border font-semibold cursor-pointer peer-checked:border-black peer-checked:bg-gray-300  hover:bg-gray-300 h-14 300 grid items-center rounded font-semibold cursor-pointer">                           
                    <div class="block">
                      4
                    </div>
                </label>
            </li>
            <li>
                <input type="radio" id="five" name="length" value="five" class="hidden peer" onChange={changeLength5}/>
                <label for="five" class="p-2 sm:p-4 bg-gray-200 hover:bg-gray-300 h-14 300 grid items-center rounded border border-width:thick font-semibold cursor-pointer peer-checked:border-black peer-checked:bg-gray-300 hover:bg-gray-300 h-14 300 grid items-center rounded font-semibold cursor-pointer">
                    <div class="block">
                      5
                    </div>
                </label>
            </li>
            <li>
                <input type="radio" id="six" name="length" value="six" class="hidden peer" onChange={changeLength6}/>
                <label for="six" class="p-2 sm:p-4 bg-gray-200 hover:bg-gray-300 h-14 300 grid items-center rounded border font-semibold cursor-pointer peer-checked:border-black peer-checked:bg-gray-300 hover:bg-gray-300 h-14 300 grid items-center rounded font-semibold cursor-pointer">
                    <div class="block">
                      6
                    </div>
                </label>
            </li>
        </ul>
      </container>
      <button className="p-2 sm:p-4 bg-gray-200 hover:bg-gray-300 h-14 300 grid items-center rounded font-semibold cursor-pointer" onClick={onClick}>
        PLAY
      </button>
    </div>
  )
}

export default Menu