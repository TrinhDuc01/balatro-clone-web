const defaultState = {
    chip: 0,
    mult: 0
}

const ChipXMultReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "BaseChipMult":
            console.log(action.payload)
            return { ...action.payload }
        case "PlusChip":
            console.log(action.payload)
            return { ...state, chip: state.chip + action.payload }
        case "MultChip":
            return { ...state, chip: state.chip * action.payload }
        case "PlusMult":
            return { ...state, mult: state.mult + action.payload }
        case "MultMult":
            return { ...state, mult: state.mult * action.payload }
        case "ResetChipMult":
            return defaultState
        default:
            return state
    }
}

export default ChipXMultReducer