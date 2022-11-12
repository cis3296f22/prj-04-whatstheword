function Box(props) {
    let state = "text-black border-2 border-gray-300 dark:text-white blue:text-yellow red:text-yellow purple:text-yellow";
    if (props.state === "C") state = "bg-emerald-500 text-white";
    if (props.state === "E") state = "bg-amber-500 text-white";
    if (props.state === "N") state = "bg-zinc-500 text-white dark:bg-gray-700";
  
    return (
      <div
        className={
          "w-8 h-8 sm:w-10 sm:h-10 grid place-items-center p-0 m-0 font-bold text-lg sm:text-2xl " +
          state
        }
      >
        {props.value}
      </div>
    );
  }
  
  function Menu() {
    return (
      <>
      </>
    );
  }
  
  export default Menu;