import { combineReducers } from "redux";
import DrawCardReducer from "./DrawCardReducer";
import PlayedCardReducer from "./PlayedCardReducer";
import HandsDiscardsReducer from "./HandsDiscardsReducer";
import PokerHandReducer from "./PokerHandReducer";
import RoundScoreReducer from "./RoundScoreReducer";
import ChipXMultReducer from "./ChipXMultReducer"
const reducer = combineReducers({
    DrawCardReducer,
    PlayedCardReducer,
    HandsDiscardsReducer,
    PokerHandReducer,
    RoundScoreReducer,
    ChipXMultReducer
})

export default reducer;