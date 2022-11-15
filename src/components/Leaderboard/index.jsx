import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Leaderboard(props) { 
    return (
        <>
        <div className='grid-container'>
            <div className="text-left font-bold py-5">Rankings</div>
            <div className="font-bold py-5">Account</div>
            <div className="text-right font-bold py-5">Score</div>

            <div className="text-left font-bold py-5">1. </div>
            <div className="font-bold py-5"><AccountCircleIcon/> {props.name1}</div>
            <div className="text-right font-bold py-5">{props.score1}</div>

            <div className="text-left font-bold py-5">2. </div>
            <div className="font-bold py-5"><AccountCircleIcon/> {props.name2}</div>
            <div className="text-right font-bold py-5">{props.score2}</div>

            <div className="text-left font-bold py-5">3. </div>
            <div className="font-bold py-5"><AccountCircleIcon/> {props.name3}</div>
            <div className="text-right font-bold py-5">{props.score3}</div>

            <div className="text-left font-bold py-5">4. </div>
            <div className="font-bold py-5"><AccountCircleIcon/> {props.name4}</div>
            <div className="text-right font-bold py-5">{props.score4}</div>

            <div className="text-left font-bold py-5">5. </div>
            <div className="font-bold py-5"><AccountCircleIcon/> {props.name5}</div>
            <div className="text-right font-bold py-5">{props.score5}</div>
        </div>
        </>
     );
}

export default Leaderboard;