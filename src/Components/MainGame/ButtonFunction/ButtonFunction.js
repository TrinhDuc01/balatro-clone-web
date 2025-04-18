import "./ButtonFunction.css"

const ButtonFunction = () => {
    return <div className="play-sort-discard">
        <div className="play-hand pixel-corners">
            Play Hand
        </div>
        <div className="sort-hand">
            <p>Sort Hand</p>
            <div className="rank-suit">
                <div className="rank pixel-corners">Rank</div>
                <div className="suit pixel-corners">Suit</div>
            </div>
        </div>

        <div className="discard pixel-corners   ">
            Discard
        </div>
    </div>
}

export default ButtonFunction