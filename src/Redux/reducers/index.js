import { combineReducers } from "redux";
import DrawCardReducer from "./DrawCardReducer";
import PlayedCardReducer from "./PlayedCardReducer";

const reducer = combineReducers({
    DrawCardReducer,
    PlayedCardReducer
})

export default reducer;