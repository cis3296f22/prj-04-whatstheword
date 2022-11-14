import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

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
          maxWidth: "101em"
        }}>
      <div className="sub-settings">Themes</div>
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
        <div className="sub-settings">Leaderboard</div>
        <div className="container">
          <Button
            className="pl-3.5 text-slate-600" 
            style={{
              margin: "1em"
            }}
            variant="contained"
            onClick={leaderboardChange}
          >Personal</Button>
          <Button
            className="pl-3.5 text-slate-600" 
            style={{
              margin: "1em"
            }}
            variant="contained"
            onClick={leaderboardChange}
          >WorldWide</Button>
        </div>
      </Menu>
    </div>
  );
}

export default Settings;
