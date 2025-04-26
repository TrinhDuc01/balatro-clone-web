import { useDispatch, useSelector } from "react-redux"
import "./infoRound.css"
import { useEffect, useState } from "react"

const InfoRound = () => {
    const dispatch = useDispatch()
    const { blindValue } = useSelector(state => state.ChallangeBlindReducer)
    const { roundScore } = useSelector(state => state.RoundScoreReducer);
    const cardChoose = useSelector(state => state.PlayedCardReducer) //danh sach card chon de danh
    const { hands, discards } = useSelector(state => state.HandsDiscardsReducer)
    useEffect(() => {
        setTimeout(() => {
            if (hands === 0 && blindValue > roundScore) {
                dispatch({ type: "GameOver" })
            }
        }, cardChoose.length * 1200)
        if (blindValue <= roundScore) dispatch({ type: "GameWin", payload: true })
    }, [hands, roundScore])
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
                        <div className="pixel-corners">{hands}</div>
                    </div>
                    <div className="discards pixel-corners">
                        <p>Discards</p>
                        <div className="pixel-corners">{discards}</div>
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