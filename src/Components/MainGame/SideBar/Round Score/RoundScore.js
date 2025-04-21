import { useDispatch, useSelector } from "react-redux";
import "./roundScore.css"
import { useEffect } from "react";

const RoundScore = () => {
    const dispatch = useDispatch()
    const { chip, mult } = useSelector(state => state.ChipXMultReducer);
    const { roundScore } = useSelector(state => state.RoundScoreReducer);
    // useEffect(() => {
    //     console.log(chip,mult,'hehe')
    //     dispatch({
    //         type:"IncreaseRoundScore",
    //         payload: chip*mult
    //     })
    // }, [dispatch])
    return <div className="round-score pixel-corners">
        <div className="title">
            <div>Round</div>
            <div>Score</div>
        </div>
        <div className="score pixel-corners">
            <span className="chip-img"></span>
            <span className="score-chip">{roundScore}</span>
        </div>
    </div>
}

export default RoundScore;