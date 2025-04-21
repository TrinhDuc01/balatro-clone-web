import { handRanking, handRankingOption, nohand } from "../../Class/HandRankingOption";

const defaultState = {
    PokerRankInfo: handRankingOption,
    PokerHandPlay: nohand,
    CardScore: []
}

const PokerHandReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CheckHand":
            console.log(action.payload)
            return {
                ...state,
                PokerHandPlay: handRanking(action.payload).rank,//tra ve object {usedCards, rank},
                CardScore: handRanking(action.payload).usedCards
            }
        default:
            return state
    }
}

export default PokerHandReducer