const defaultState = [

]

const PlayedCardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "AddCard": {
            return [...state, action.payload]
        }
        case "RemoveCard": {
            return state.filter(card => card.id !== action.payload.id)
        }

        default:
            return state
    }
}

export default PlayedCardReducer