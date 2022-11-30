import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import Board from "../Board";
import { useEffect, useState } from "react";

console.log("settings running");

/**
 * function to render the Settings Tab
 * @param {Null} anchorEl - event handler 
 * @param {Boolean} show - To toggle the Themes
 * @param {Boolean} show2 - To toggle the Leaderboard
 * @param {Boolean} toPlayAgain - To play again
 * @param {Boolean} toQuit - To quit game
 * @param {Function} leaderboardChange - to show the leaderboard
 * @param {Function} darkHandlerChange - to display dark theme
 * @param {Function} blueHandlerChange - to display blue theme
 * @param {Function} redHandlerChange - to display red theme
 * @param {Function} purpleHandlerChange - to display purple theme
 * @param {Function} open - if anchorEl is true
 * @param {Function} handleClick - event handler for clicked
 * @param {Function} handleClose - To close the display
 * @returns the Settings functionality and display
 */
function Settings(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [toPlayAgain, setToPlayAgain] = useState(false);
  const [toQuit, setToQuit] = useState(false);

  const leaderboardChange = () => {
    props.leaderboard(true);
  }

  // darkness is the name of the Game in App.css
  const darkHandleChange = () => {
    props.darkness(!props.dark);
    console.log("Dark Mode!")
    console.log(props, props.dark);
  };

  const blueHandleChange = () => {
    props.blueness(!props.blue);
    console.log("Blue Mode!")
    console.log(props, props.blue);
  };

  const redHandleChange = () => {
    props.redness(!props.red);
    console.log("Red Mode!")
    console.log(props, props.red);
  };

  const purpleHandleChange = () => {
    props.purpleness(!props.purple);
    console.log("Purple Mode!")
    console.log(props, props.purple);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (toPlayAgain === true) {
      window.location.reload(false);
    }
  }, [toPlayAgain]);

  useEffect(() => {
    if (toQuit === true) 
    {
      window.location.reload(false);
    }
  }, [toQuit]);

  return (
    <div>
      <SettingsIcon
        onClick={handleClick}
        className="text-black dark:text-white blue:text-yellow red:text-yellow purple:text-yellow cursor-pointer"
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} style={{

        }}>
      <div 
        className="dropdown-item" onClick={() => setShow(!show)}>Themes</div>
        {
          show?<div className="dropdown-item-child grid-container">
            <div className="grid-container">
              <div
                className="pl-3.5 text-slate-600 button-size" 
                style={{
                  backgroundColor: "#27272A",
                  margin: ".75em"
                }}
                onClick={darkHandleChange}
              ></div>
              <div
                className="pl-3.5 text-slate-600 button-size" 
                style={{
                  backgroundColor: "rgb(17 94 89)",
                  margin: ".75em"
                }}
                onClick={blueHandleChange}
              ></div>
              <div
                className="pl-3.5 text-slate-600 button-size" 
                style={{
                  backgroundColor: "rgb(153 27 27)",
                  margin: ".75em"
                }}
                onClick={redHandleChange}
              ></div>
              <div
                className="pl-3.5 text-slate-600 button-size" 
                style={{
                  backgroundColor: "rgb(107 33 168)",
                  margin: ".75em"
                }}
                onClick={purpleHandleChange}
              ></div>
            </div>
          </div>:null
        }
        <div className="dropdown-item" onClick={() => setShow2(!show2)}>Leaderboard</div>
          {show2?<div>
            <div className="dropdown-item dropdown-item-child" 
                onClick={leaderboardChange}
              >Personal</div>
            <div className="dropdown-item dropdown-item-child" 
                onClick={leaderboardChange}
              >Worldwide</div>
          </div>:null}
        <div className="dropdown-item"
          onClick={(event) => setToQuit(true)}
        >Quit</div>
      </Menu>
    </div>
  );
}

export default Settings;
