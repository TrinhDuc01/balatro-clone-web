let lastPlayCardId = 0

const numberedCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
const faceCards = ['Jack', 'Queen', 'King'];
const cardRanks = [...numberedCards, ...faceCards, 'Ace'] //spreat operator to copy all element in array

class PlayCard {
    constructor(name, suit) {
        lastPlayCardId++
        this.id = lastPlayCardId;
        this.name = name
        this.suit = suit
    }

    isFace() {
        return faceCards.includes(this.name)
    }

    isNumbered() {
        return numberedCards.includes(this.name)
    }

    getRank() {
        return cardRanks.indexOf(this.name)
    }

    points() {
        if (this.isNumbered()) {
            return Number(this.name)
        }
        return 10
    }
}

export default PlayCard