import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import Settings from "../Settings";

function NavBar(props) {
  return (
    <div className="navbar flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white blue:text-yellow red:text-yellow purple:text-yellow">
      <HelpOutlineIcon
        onClick={() => {
          props.help(true);
        }}
      />
      <h1 className="text-3xl font-bold tracking-wider">What's The Word</h1>
      <Settings darkness={props.darkness} dark={props.dark} blueness={props.blueness} blue={props.blue} redness={props.redness} red={props.red} purpleness={props.purpleness} purple={props.purple} />
    </div>
  );
}

export default NavBar;
