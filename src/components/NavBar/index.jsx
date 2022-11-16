import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import LoginIcon from "@mui/icons-material/Login";
import Settings from "../Settings";
import Login from "../Login";

console.log("navbar running");
function NavBar(props) {
  return (
    <div className="navbar flex w-50 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white blue:text-yellow red:text-yellow purple:text-yellow">
      <HelpOutlineIcon
        onClick={() => {
          props.help(true);
        }}
      />
      <LoginIcon
        onClick={() => {
          props.login(true);
        }}
      />
      <h1 className="text-3xl font-bold tracking-wider">What's The Word</h1>
      <BarChartIcon
        onClick={() => {
          props.help(true);
        }}
      />
      <Settings darkness={props.darkness} dark={props.dark} blueness={props.blueness} blue={props.blue} redness={props.redness} red={props.red} purpleness={props.purpleness} purple={props.purple} leaderboard={props.leaderboard} />

    </div>
  );
}

export default NavBar;
