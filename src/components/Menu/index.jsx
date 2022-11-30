import { useCallback, useEffect, useState } from "react";
import Game from "../Game";

/**
 * function to render the startup Menu
 * @param {Function} onClick - Event Handler for Menu
 * @param {Function} changeLength - Option choice for length
 * @returns the Startup Menu
 */
function Menu({ onClick, changeLength }) {
  return (
    <div className="flex flex-col items-center w-100 pb-5 gap-5 dark:text-white blue:text-yellow red:text-yellow purple:text-yellow">
      <h2 className="text-2xl">Word Length</h2>
      <container>
        <ul class="items-center w-full flex gap-1">
            <li>

                <input type="radio" id="four" name="length" value={4} class="hidden peer" onChange={(e) => changeLength(e)}/>
                <label for="four" class="p-2 sm:p-4 bg-gray-200 hover:bg-gray-300 h-14 300 grid items-center rounded border font-semibold cursor-pointer peer-checked:border-black peer-checked:bg-gray-300  hover:bg-gray-300 h-14 300 grid items-center rounded font-semibold cursor-pointer">                           

                    <div class="block">
                      4
                    </div>
                </label>
            </li>
            <li>

                <input type="radio" id="five" name="length" value={5} class="hidden peer" onChange={(e) => changeLength(e)}/>
                <label for="five" class="p-2 sm:p-4 bg-gray-200 hover:bg-gray-300 h-14 300 grid items-center rounded border border-width:thick font-semibold cursor-pointer peer-checked:border-black peer-checked:bg-gray-300 hover:bg-gray-300 h-14 300 grid items-center rounded font-semibold cursor-pointer">

                    <div class="block">
                      5
                    </div>
                </label>
            </li>
            <li>

                <input type="radio" id="six" name="length" value={6} class="hidden peer" onChange={(e) => changeLength(e)}/>
                <label for="six" class="p-2 sm:p-4 bg-gray-200 hover:bg-gray-300 h-14 300 grid items-center rounded border font-semibold cursor-pointer peer-checked:border-black peer-checked:bg-gray-300 hover:bg-gray-300 h-14 300 grid items-center rounded font-semibold cursor-pointer">

                    <div class="block">
                      6
                    </div>
                </label>
            </li>
        </ul>
      </container>
      <button className="p-2 sm:p-4 bg-gray-200 hover:bg-gray-300 h-14 300 grid items-center rounded font-semibold cursor-pointer
                        dark:bg-zinc-400 dark:hover:bg-zinc-500 blue:blue-keys red:red-keys purple:purple-keys" 
          onClick={onClick}>
        PLAY
      </button>
    </div>
  )
}

export default Menu