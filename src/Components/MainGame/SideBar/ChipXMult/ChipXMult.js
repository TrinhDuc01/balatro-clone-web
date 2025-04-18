import { useSelector } from 'react-redux';
import './chipXmult.css'

const ChipXMult = () => {

    const PokerHand = useSelector(state => state.PokerHandReducer.PokerHandPlay)
    console.log(PokerHand)
    return <div className="chip-x-mult pixel-corners">
        <div className="calculate-score">
            {PokerHand.nameHand}
            <div className='lv-hand'>Lv.{PokerHand.level}</div>
        </div>
        <div className='chip-x-mult-detail'>
            <div className='pixel-corners'>
                {PokerHand.chip}
            </div>
            <div>
                X
            </div>
            <div className='pixel-corners'>
                {PokerHand.mult}
            </div>
        </div>
    </div>
}

export default ChipXMult;