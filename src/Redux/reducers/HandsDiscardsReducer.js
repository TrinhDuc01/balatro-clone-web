const defaultState = {
    hands: 4,
    discards: 4
}

const HandsDiscardsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UseHands":
            return {
                ...state,
                hands: state.hands - 1
            }
        case "UseDiscards":
            return {
                ...state,
                discards: state.discards - 1
            }
        case "RestoreHandsDiscards":
            return defaultState
        default:
            return state
    }
}

export default HandsDiscardsReducer