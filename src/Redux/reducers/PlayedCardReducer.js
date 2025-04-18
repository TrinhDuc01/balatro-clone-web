const defaultState = [

]

const PlayedCardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "AddCard": {
            if (state.length < 5) {
                return [...state, action.payload]
            }
            return state;
        }
        case "RemoveCard": {
            return state.filter(card => card.id !== action.payload.id)
        }
        case "DiscardChooseCard": {
            return []
        }

        default:
            return state
    }
}

export default PlayedCardReducer