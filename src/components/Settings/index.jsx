import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { Switch } from "@mui/material";

function Settings(props) {
  const [anchorEl, setAnchorEl] = useState(null);

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
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <FormControlLabel
          className="pl-3.5 text-slate-600"
          control={<Switch onChange={darkHandleChange} />}
          label="Dark mode"
        />
        <FormControlLabel
          className="pl-3.5 text-slate-600"
          control={<Switch onChange={blueHandleChange} />}
          label="Blue mode"
        />
        <FormControlLabel
          className="pl-3.5 text-slate-600"
          control={<Switch onChange={redHandleChange} />}
          label="Red mode"
        />
        <FormControlLabel
          className="pl-3.5 text-slate-600"
          control={<Switch onChange={purpleHandleChange} />}
          label="Purple mode"
        />
        <hr />
      </Menu>
    </div>
  );
}

export default Settings;
