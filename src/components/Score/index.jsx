import { useEffect, useState } from "react";

function Score(props) {
    const[score, setScore] = useState(0);
    const[attempts, setAttempts] = useState(0);

    return (
        <div className="pb-5 font-medium grid-container-two">
            <div>Score -  <b>{props.score}</b></div>
            <div>Attempts - <b>{props.attempts}</b></div>
        </div>
    );
}

export default Score;