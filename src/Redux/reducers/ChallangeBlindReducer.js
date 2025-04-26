const defaultState = {
    blindName: "Small Blind",
    blindValue: 300
}

const ChallangeBlindReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UpdateBlind':
            return {
                ...state,
                blindValue: state.blindValue + 100
            }
        default:
            return state
    }
}

export default ChallangeBlindReducer