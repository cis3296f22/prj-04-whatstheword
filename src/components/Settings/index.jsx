import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useState } from "react";

/*function Dropdown(props) {
  const[parent, setParent] = useState(false);
  const[child, setChild] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.title.onClick())
      setShow(true);
    else 
      setShow(false);
  })

  return {
    
  }
}*/

function Settings(props) {
  const [anchorEl, setAnchorEl] = useState(null);

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

  return (
    <div>
      <SettingsIcon
        onClick={handleClick}
        className="text-black dark:text-white blue:text-yellow red:text-yellow purple:text-yellow"
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} style={{
          minWidth: "90em",
          maxWidth: "101em",
        }}>
      <div 
        className="dropdown-item">Themes</div>
        <div className="dropdown-item-child">
        <Button
          className="pl-3.5 text-slate-600" 
          style={{
            backgroundColor: "#27272A",
            margin: "1em"
          }}
          variant="contained"
          onClick={darkHandleChange}
        ></Button>
        <Button
          className="pl-3.5 text-slate-600" 
          style={{
            backgroundColor: "rgb(17 94 89)",
            margin: "1em"
          }}
          variant="contained"
          onClick={blueHandleChange}
        ></Button>
        <Button
          className="pl-3.5 text-slate-600" 
          style={{
            backgroundColor: "rgb(153 27 27)",
            margin: "1em"
          }}
          variant="contained"
          onClick={redHandleChange}
        ></Button>
        <Button
          className="pl-3.5 text-slate-600" 
          style={{
            backgroundColor: "rgb(107 33 168)",
            margin: "1em"
          }}
          variant="contained"
          onClick={purpleHandleChange}
        ></Button>
        </div>
        <div className="dropdown-item">Leaderboard</div>
        <div className="dropdown-item dropdown-item-child" 
            onClick={leaderboardChange}
          >Personal</div>
        <div className="dropdown-item dropdown-item-child" 
            onClick={leaderboardChange}
          >Worldwide</div>
        <div className="dropdown-item">Quit</div>
      </Menu>
    </div>
  );
}

export default Settings;
