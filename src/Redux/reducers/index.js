import { combineReducers } from "redux";
import DrawCardReducer from "./DrawCardReducer";
import PlayedCardReducer from "./PlayedCardReducer";
import HandsDiscardsReducer from "./HandsDiscardsReducer";
import PokerHandReducer from "./PokerHandReducer";
const reducer = combineReducers({
    DrawCardReducer,
    PlayedCardReducer,
    HandsDiscardsReducer,
    PokerHandReducer
})

export default reducer;