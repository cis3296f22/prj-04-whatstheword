import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from "react";

/**
 * function to render Leaderboard
 * @param {String} name1 - the ranked 1st name 
 * @param {String} name2 - the ranked 2nd name 
 * @param {String} name3 - the ranked 3rd name 
 * @param {String} name4 - the ranked 4th name 
 * @param {String} name5 - the ranked 5th name 
 * @param {Number} score1 - the score of the 1st rank
 * @param {Number} score2 - the score of the 2nd rank
 * @param {Number} score3 - the score of the 3rd rank
 * @param {Number} score4 - the score of the 4th rank
 * @param {Number} score5 - the score of the 5th rank
 * @param {Number} Ranking - the Ranking of the uders
 * @memberof Components
 * @returns the display of the leaderboard
 */
function Leaderboard(props) { 
    const[name1, setName1] = useState("");
    const[name2, setName2] = useState("");
    const[name3, setName3] = useState("");
    const[name4, setName4] = useState("");
    const[name5, setName5] = useState("");
    const[score1, setScore1] = useState(0);
    const[score2, setScore2] = useState(0);
    const[score3, setScore3] = useState(0);
    const[score4, setScore4] = useState(0);
    const[score5, setScore5] = useState(0);
    const[ranking, setRanking] = useState(0);

    return (
        <>
        <div className='grid-container'>
            <div className="text-left font-bold py-5">Rankings</div>
            <div className="font-bold py-5">Account</div>
            <div className="text-right font-bold py-5">Score</div>

            <div className="text-left font-bold py-5">{ranking + 1}.</div>
            <div className="font-bold py-5"><AccountCircleIcon/> {name1}</div>
            <div className="text-right font-bold py-5">{score1}</div>

            <div className="text-left font-bold py-5">{ranking + 2}.</div>
            <div className="font-bold py-5"><AccountCircleIcon/> {name2}</div>
            <div className="text-right font-bold py-5">{score2}</div>

            <div className="text-left font-bold py-5">{ranking + 3}.</div>
            <div className="font-bold py-5"><AccountCircleIcon/> {name3}</div>
            <div className="text-right font-bold py-5">{score3}</div>

            <div className="text-left font-bold py-5">{ranking + 4}.</div>
            <div className="font-bold py-5"><AccountCircleIcon/> {name4}</div>
            <div className="text-right font-bold py-5">{score4}</div>

            <div className="text-left font-bold py-5">{ranking + 5}.</div>
            <div className="font-bold py-5"><AccountCircleIcon/> {name5}</div>
            <div className="text-right font-bold py-5">{score5}</div>
        </div>
        </>
     );
}

export default Leaderboard;