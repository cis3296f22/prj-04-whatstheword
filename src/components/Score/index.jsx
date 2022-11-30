import { useEffect, useState } from "react";

/**
 * function to render the score and attempts
 * @param {Number} score - the score display
 * @param {Number} attempts - the number of attempts display
 * @returns the score and attempts display
 */
function Score(props) {
    const[score, setScore] = useState(0);
    const[attempts, setAttempts] = useState(0);

    return (
        <div className="pb-5 font-medium grid-container-two dark:text-white blue:text-yellow red:text-yellow purple:text-yellow">
            <div data-testid="game-display">Score -  <b>{props.score}</b></div>
            <div>Attempts - <b>{props.attempts}</b></div>
        </div>
    );
}

export default Score;