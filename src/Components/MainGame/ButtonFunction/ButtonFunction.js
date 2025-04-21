import { useDispatch, useSelector } from "react-redux"
import "./ButtonFunction.css"
import { useRef } from "react";

const ButtonFunction = () => {
    const dispatch = useDispatch()

    const chipSound = useRef(null);
    const cardChoose = useSelector(state => state.PlayedCardReducer) //danh sach card chon de danh
    // console.log(cardChoose)
    const { CardScore } = useSelector(state => state.PokerHandReducer)//chi nhung la ghi diem moi duoc tinh
    const remainingCards = useSelector((state) => state.DrawCardReducer.remainingCards) // so luong card con lai
    const { hands, discards } = useSelector(state => state.HandsDiscardsReducer) // lay ra so luong hands va discard con lai
    const { PokerHandPlay } = useSelector(state => state.PokerHandReducer) //lay ra hand rank hien tai
    // console.log(PokerHandPlay)

    const handleDiscard = () => {
        //Kiem soat su kien Discard"Bo bai"
        dispatch({
            type: "DiscardCardInDraw",
            payload: cardChoose
        })//bỏ bài ở trên hand
        dispatch({
            type: "DiscardChooseCard"
        })//bỏ bài

        setTimeout(() => {
            dispatch({
                type: "Draw",
                deck: remainingCards,
                num: cardChoose.length,
            })//rút lại bài sau 0.6s
        }, 600)
        dispatch({ type: "UseDiscards" })//trừ 1 discard trừ 1 lượt bỏ
    }

    const handlePlayHand = async () => {
        dispatch({
            type: 'Calculate' // bắt đầu tính toán
        })
        dispatch({
            type: 'UseHands', // -1hand
            payload: []
        })
        dispatch({ type: "DiscardCardInDraw", payload: cardChoose })//bỏ bài ở trên tay

        dispatch({ type: "BaseChipMult", payload: PokerHandPlay })

        let { chip, mult } = PokerHandPlay
        // chi lay card tinh diem
        for (let i = 0; i < CardScore.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 300));
            chip += CardScore[i].points()
            chipSound.current.play()
            await new Promise(resolve => setTimeout(resolve, 200));
            // console.log(CardScore[i].getRank())
            dispatch({
                type: "PlusChip",
                payload: CardScore[i].points()
            })
        }
        setTimeout(()=>{
            dispatch({
                type: "IncreaseRoundScore",
                payload: chip * mult
            })
            chipSound.current.play()
        },400)


        //Sau khi đánh thi bỏ bài

        dispatch({
            type: "DiscardChooseCard"
        })//bỏ bài ở chỗ nhớ

        setTimeout(() => {
            dispatch({
                type: "Draw",
                deck: remainingCards,
                num: cardChoose.length,
            })//rút lại bài sau 0.6s
        }, 600)
        dispatch({
            type: 'NoCalculate' // Kết thúc tính toán
        })
        dispatch({
            type: 'ResetChipMult', // reset chip mult
        })
        dispatch({
            type: 'CheckHand', // reset hand
            payload: []
        })

    }


    const handleSortRank = () => {
        dispatch({ type: "SortRank" })//sắp xếp theo giá trị
    }

    const handleSortSuit = () => {
        dispatch({ type: "SortSuit" })//sắp xếp theo chất
    }
    return <div className="play-sort-discard">
        <div onClick={handlePlayHand} className={`play-hand pixel-corners ${cardChoose.length === 0 || hands <= 0 ? 'disabled' : ""}`}>
            Play Hand
        </div>
        <div className="sort-hand">
            <p>Sort Hand</p>
            <div className="rank-suit">
                <div onClick={handleSortRank} className="rank pixel-corners">Rank</div>
                <div onClick={handleSortSuit} className="suit pixel-corners">Suit</div>
            </div>
        </div>
        <audio ref={chipSound} src="/Sounds/chips1.ogg" />
        <div className={`discard pixel-corners ${cardChoose.length === 0 || discards <= 0 ? 'disabled' : ""}`} onClick={handleDiscard}>
            Discard
        </div>
    </div>
}

export default ButtonFunction