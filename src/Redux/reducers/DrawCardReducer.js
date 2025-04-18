const defaultState = {
    DeckAllGame: [],
    remainingCards: [],
    drawCard: []
}

const DrawCardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "InitDeckRoot":
            console.log('remaining')
            return {
                DeckAllGame: [...action.payload],
                remainingCards: [...action.payload],
                drawCard: []
            }
        case "Draw": {
            if (action.deck.length !== 0) {
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
                    DeckAllGame: [...state.DeckAllGame],
                    remainingCards: shuffledDeck,
                    drawCard: [...state.drawCard, ...drawnCards]
                }
            }
            return state
        }

        case "SortRank": {
            const sortRank = state.drawCard.sort(((a, b) => b.getRank() - a.getRank()))
            return {
                ...state,
                drawCard: [...sortRank]
            }
        }

        case "SortSuit": {
            const sortRankSuit = state.drawCard.sort((a, b) => {
                if (a.getSuit() !== b.getSuit()) {
                    return a.getSuit() - b.getSuit()
                }
                else {
                    return b.getRank() - a.getRank()
                }
            })
            return {
                ...state,
                drawCard: [...sortRankSuit]
            }
        }
        case "DiscardCardInDraw": {
            const discardCards = new Set(action.payload.map(card => card.id))
            return {
                DeckAllGame: [...state.DeckAllGame],
                remainingCards: state.remainingCards,
                drawCard: state.drawCard.filter(card => !discardCards.has(card.id)),
            }
        }
        case "ChangIndex": {
            return {
                DeckAllGame: [...state.DeckAllGame],
                remainingCards: state.shuffledDeck,
                drawCard: action.payload
            }
        }

        default:
            return state
    }
}

export default DrawCardReducer