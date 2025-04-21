let lastPlayCardId = 0

const numberedCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
const faceCards = ['Jack', 'Queen', 'King'];
const cardRanks = [...numberedCards, ...faceCards, 'Ace'] //spreat operator to copy all element in array

class PlayCard {
    constructor(rank, suit, position) {
        lastPlayCardId++
        this.id = lastPlayCardId;
        this.rank = rank
        this.suit = suit
        this.position = position // vị trí của lá bài trên asset
    }

    isFace() {
        return faceCards.includes(this.rank)
    }

    isNumbered() {
        return numberedCards.includes(this.rank)
    }

    getRank() {
        return cardRanks.indexOf(this.rank)
    }

    getSuit() {
        if (this.suit === "Diamond") return 3
        if (this.suit === "Heart") return 2
        if (this.suit === "Spread") return 1
        if (this.suit === "Club") return 0
    }

    points() {
        if (this.isNumbered()) {
            return Number(this.rank)
        }
        if (this.isFace()) {
            return 10
        }
        return 11
    }
}

export default PlayCard