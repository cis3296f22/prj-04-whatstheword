console.log("error running");

/**
 * function to create warnings of the error
 * @param {function} props.children - the error of the components
 * @returns the error message before the game
 */
function Error(props) {
  return (
    <div className="absolute top-20 w-full grid place-items-center">
      <div className="w-fit px-8 py-2 bg-gray-800 text-white text-center">
        {props.children}
      </div>
    </div>
  );
}

export default Error;
