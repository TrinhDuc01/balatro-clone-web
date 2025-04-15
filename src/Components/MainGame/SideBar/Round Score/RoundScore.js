import "./roundScore.css"

const RoundScore = () => {
    return <div className="round-score pixel-corners">
        <div className="title">
            <div>Round</div>
            <div>Score</div>
        </div>
        <div className="score pixel-corners">
            <span className="chip-img"></span>
            <span className="score-chip">212112e3</span>
        </div>
    </div>
}

export default RoundScore;