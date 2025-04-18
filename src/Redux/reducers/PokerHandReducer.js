import { handRanking, handRankingOption, nohand } from "../../Class/HandRankingOption";

const defaultState = {
    PokerRankInfo: handRankingOption,
    PokerHandPlay: nohand
}

const PokerHandReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CheckHand":
            console.log(action.payload)
            return {
                ...state,
                PokerHandPlay: handRanking(action.payload)
            }

        default:
            return state
    }
}

export default PokerHandReducer