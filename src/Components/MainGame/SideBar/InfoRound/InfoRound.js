import "./infoRound.css"

const InfoRound = () => {
    return (
        <div className="info-round">
            <div className="run-info-options">
                <div className="run-info pixel-corners">
                    <div>Run</div>
                    <div>Info</div>
                </div>
                <div className="options pixel-corners">
                    Options
                </div>
            </div>
            <div className="current-hand-info">
                <div className="hands-discards">
                    <div className="hands pixel-corners">
                        <p>Hands</p>
                        <div className="pixel-corners">4</div>
                    </div>
                    <div className="discards pixel-corners">
                        <p>Discards</p>
                        <div className="pixel-corners">4</div>
                    </div>
                </div>
                <div className="dollars gold">
                    <div className="pixel-corners">
                        <div className="pixel-corners">
                            $4
                        </div>
                    </div>
                </div>
                <div className="ante-round">
                    <div className="ante pixel-corners">
                        <p>Ante</p>
                        <div className="pixel-corners">
                            <span>1</span>/8
                        </div>
                    </div>
                    <div className="round  pixel-corners">
                        <p>Round</p>
                        <span className="pixel-corners">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoRound