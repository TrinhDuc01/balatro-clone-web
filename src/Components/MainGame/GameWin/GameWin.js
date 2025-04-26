import { useDispatch, useSelector } from 'react-redux'
import './GameWin.css'
const GameWin = () => {
    const dispatch = useDispatch()
    const handleNextStage = () => {
        dispatch({ type: 'GameWin', payload: false })
        dispatch({ type: "UpdateBlind" })
        dispatch({ type: "NextStage" })
        dispatch({ type: "RestoreHandsDiscards" })
        dispatch({ type: "RestartRoundScore" })
        dispatch({ type: "DiscardChooseCard" })
    }
    return <div id="game-win">
        YOU WIN
        <audio src='./Sounds/victory.mp3' autoPlay />
        <div id='next-stage' className='pixel-corners' onClick={handleNextStage}>{'Next Stage >'}</div>
    </div>
}

export default GameWin;