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

    points() {
        if (this.isNumbered()) {
            return Number(this.rank)
        }
        return 10
    }
}

export default PlayCard