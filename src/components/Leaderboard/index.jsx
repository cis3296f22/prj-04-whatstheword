import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Leaderboard(props) { 
    return (
        <>
        <div className='grid-container'>
            <div className="text-left font-bold py-5">Rankings</div>
            <div className="font-bold py-5">Account</div>
            <div className="text-right font-bold py-5">Score</div>

            <div className="text-left font-bold py-5">1. </div>
            <div className="font-bold py-5"><AccountCircleIcon/> Name</div>
            <div className="text-right font-bold py-5"> </div>

            <div className="text-left font-bold py-5">2. </div>
            <div className="font-bold py-5"><AccountCircleIcon/> Name</div>
            <div className="text-right font-bold py-5"> </div>

            <div className="text-left font-bold py-5">3. </div>
            <div className="font-bold py-5"><AccountCircleIcon/> Name</div>
            <div className="text-right font-bold py-5"> </div>

            <div className="text-left font-bold py-5">4. </div>
            <div className="font-bold py-5"><AccountCircleIcon/> Name</div>
            <div className="text-right font-bold py-5"> </div>

            <div className="text-left font-bold py-5">5. </div>
            <div className="font-bold py-5"><AccountCircleIcon/> Name</div>
            <div className="text-right font-bold py-5"> </div>
        </div>
        </>
     );
}

export default Leaderboard;