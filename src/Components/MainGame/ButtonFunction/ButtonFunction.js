import { useDispatch, useSelector } from "react-redux"
import "./ButtonFunction.css"

const ButtonFunction = () => {
    const dispatch = useDispatch()
    const cardChoose = useSelector(state => state.PlayedCardReducer)
    console.log(cardChoose)
    const remainingCards = useSelector((state) => state.DrawCardReducer.remainingCards)
    const { hands, discards } = useSelector(state => state.HandsDiscardsReducer)



    const handleDiscard = () => {
        dispatch({
            type: "DiscardCardInDraw",
            payload: cardChoose
        })
        dispatch({
            type: "DiscardChooseCard"
        })
        setTimeout(() => {
            dispatch({
                type: "Draw",
                deck: remainingCards,
                num: cardChoose.length,
            })
        }, 500)
        dispatch({ type: "UseDiscards" })
    }

    const handleSortRank = () => {
        dispatch({ type: "SortRank" })
    }

    const handleSortSuit = () => {
        dispatch({ type: "SortSuit" })
    }
    return <div className="play-sort-discard">
        <div className={`play-hand pixel-corners ${cardChoose.length === 0 || hands <= 0 ? 'disabled' : ""}`}>
            Play Hand
        </div>
        <div className="sort-hand">
            <p>Sort Hand</p>
            <div className="rank-suit">
                <div onClick={handleSortRank} className="rank pixel-corners">Rank</div>
                <div onClick={handleSortSuit} className="suit pixel-corners">Suit</div>
            </div>
        </div>

        <div className={`discard pixel-corners ${cardChoose.length === 0 || discards <= 0 ? 'disabled' : ""}`} onClick={handleDiscard}>
            Discard
        </div>
    </div>
}

export default ButtonFunction