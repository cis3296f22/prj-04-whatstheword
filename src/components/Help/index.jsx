
// C --> Correct letter in the right place color (green)
// E --> Correct letter in the wrong place color (yellow)
// N --> Wrong letter color (gray)
console.log("help running");
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

function Help() {
  return (
    <>
      <h3 className="text-left font-bold">Introduction</h3>
      <p className="text-left text-sm sm:text-base py-5 font-regular opacity-75 mr-1">
        You have choose from three different levels: 4, 5, or 6!
        <br />
        4 - four-letter words and five tries 
        <br />
        5 - five-letter words and six tries
        <br />
        6 - six-letter words and seven tries
        <br />
        Each guess must be a valid word. Hit the enter button to
        submit.
        <br /> 
        After each guess, the color of the tiles will change to show how
        close your guess was to the word.
      </p>
      <hr />
      <h3 className="text-left font-bold py-5">Examples</h3>
      <div className="flex gap-1">
        <Box value="S" state="C" />
        <Box value="W" />
        <Box value="E" />
        <Box value="A" />
        <Box value="T" />
      </div>
      <p className="text-left text-sm sm:text-base py-2 opacity-75">
        The letter <b>S</b> is in the word and in the correct spot.
      </p>
      <div className="flex gap-1">
        <Box value="N" />
        <Box value="U" />
        <Box value="M" state="E" />
        <Box value="B" />
        <Box value="S" />
      </div>
      <p className="text-left text-sm sm:text-base py-2 opacity-75">
        The letter <b>M</b> is in the word but NOT in the correct spot.
      </p>
      <div className="flex gap-1">
        <Box value="F" />
        <Box value="L" state="N" />
        <Box value="A" />
        <Box value="T" />
        <Box value="S" />
      </div>
      <p className="text-left text-sm sm:text-base py-2 opacity-75">
        The letter <b>L</b> is not in the word.
      </p>
      <hr />
      <h3 className="text-left font-bold pt-5">Scoring</h3>
      <p className="text-left text-sm sm:text-base py-5 font-regular opacity-75 mr-1">
        After solving the puzzle you will earn a certain amount of points for score as well as the 
        amount of attempts you used
        <br /> <br />
        Use your attempts wisely!
      </p>
    </>
  );
}

export default Help;
