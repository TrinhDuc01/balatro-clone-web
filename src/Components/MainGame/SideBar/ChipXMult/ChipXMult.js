import { useSelector } from 'react-redux';
import './chipXmult.css'

const ChipXMult = () => {

    const { PokerHandPlay } = useSelector(state => state.PokerHandReducer)
    // console.log(PokerHandPlay)
    const { isCalculate } = useSelector(state => state.RoundScoreReducer);
    const { chip, mult } = useSelector(state => state.ChipXMultReducer);
    console.log(chip, mult)
    return <div className="chip-x-mult pixel-corners">
        <div className="calculate-score">
            {PokerHandPlay.nameHand}
            <div className='lv-hand'>Lv.{PokerHandPlay.level}</div>
        </div>
        <div className='chip-x-mult-detail'>
            <div className='pixel-corners '>
                <div className='chip-blue'>
                    {!isCalculate ? PokerHandPlay.chip : chip}
                </div>
            </div>
            <div>
                X
            </div>
            <div className='pixel-corners'>
                <div className='bounce mult-red'>
                    {!isCalculate ? PokerHandPlay.mult : mult}
                </div>
            </div>
        </div>
    </div>
}

export default ChipXMult;