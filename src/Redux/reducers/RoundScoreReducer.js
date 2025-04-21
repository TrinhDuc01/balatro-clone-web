const defaultState = {
    roundScore: 0,
    isCalculate: false
}

const RoundScoreReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "IncreaseRoundScore":
            return { ...state,roundScore: state.roundScore + action.payload};
        case "RestartRoundScore":
            return {  ...state,roundScore: 0 };
        case "Calculate":
            return { ...state, isCalculate: true }
        case "NoCalculate":
            return { ...state, isCalculate: false }
        default:
            return state;
    }
}

export default RoundScoreReducer