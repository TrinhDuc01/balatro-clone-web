const defaultState = {
    remainingCards: [],
    drawCard: []
}

const DrawCardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "InitDeckRoot":
            return {
                remainingCards: [...action.payload],
                drawCard: []
            }
        case "Draw": {
            const shuffledDeck = [...action.deck]; // Tạo bản sao mảng để không làm thay đổi mảng gốc
            const drawnCards = [];
            // Xáo trộn mảng
            for (let i = shuffledDeck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
            }
            // Lấy num phần tử ngẫu nhiên
            for (let i = 0; i < action.num; i++) {
                drawnCards.push(shuffledDeck.pop());
            }

            return {
                remainingCards: shuffledDeck,
                drawCard: drawnCards
            }
        }
        case "ChangIndex": {
            return {
                remainingCards: state.shuffledDeck,
                drawCard: action.payload
            }
        }

        default:
            return state
    }
}

export default DrawCardReducer