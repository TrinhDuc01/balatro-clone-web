let HandMax = 5
// các loại Hand trong balatro
const handRankingOption = {
    'Pair': {
        level: 1,
        nameHand: "Pair",
        levelupvalue: {
            chip: 15,
            mult: 1,
        },
        get mult() {// update điểm chip theo cấp của hand
            return (this.level - 1) * this.levelupvalue.mult + 2
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 10
        },
        timesPlayed: 0
    },
    'Two Pair': {
        level: 1,
        nameHand: "Two Pair",
        levelupvalue: {
            chip: 20,
            mult: 1,
        },
        get mult() {
            return (this.level - 1) * this.levelupvalue.mult + 2
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 20
        },
        timesPlayed: 0
    },
    'Three of a Kind': {
        level: 1,
        nameHand: "Three of a Kind",
        levelupvalue: {
            chip: 20,
            mult: 2,
        },
        get mult() {
            return (this.level - 1) * this.levelupvalue.mult + 3
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 30
        },
        timesPlayed: 0
    },
    'Straight': {
        level: 1,
        nameHand: "Straight",
        levelupvalue: {
            chip: 30,
            mult: 3,
        },
        get mult() {
            return (this.level - 1) * this.levelupvalue.mult + 4
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 30
        },
        timesPlayed: 0
    },
    'Flush': {
        level: 1,
        nameHand: "Flush",
        levelupvalue: {
            chip: 15,
            mult: 2,
        },
        get mult() {
            return (this.level - 1) * this.levelupvalue.mult + 4
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 35
        },
        timesPlayed: 0
    },
    'Full House': {
        level: 1,
        nameHand: "Full House",
        levelupvalue: {
            chip: 25,
            mult: 2,
        },
        get mult() {
            return (this.level - 1) * this.levelupvalue.mult + 4
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 40
        },
        timesPlayed: 0
    },
    'Four of a Kind': {
        level: 1,
        nameHand: "Four of a Kind",
        levelupvalue: {
            chip: 30,
            mult: 3,
        },
        get mult() {
            return (this.level - 1) * this.levelupvalue.mult + 7
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 60
        },
        timesPlayed: 0
    },
    'Five of a Kind': {
        level: 1,
        nameHand: "Five of a Kind",
        levelupvalue: {
            chip: 35,
            mult: 3,
        },
        get mult() {
            return (this.level - 1) * this.levelupvalue.mult + 120
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 12
        },
        timesPlayed: 0
    },
    'High Card': {
        level: 1,
        nameHand: "High Card",
        levelupvalue: {
            chip: 10,
            mult: 1,
        },
        get mult() {
            return (this.level - 1) * this.levelupvalue.mult + 1
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 5
        },
        timesPlayed: 0
    },
    'Straight Flush': {
        level: 1,
        nameHand: "Straight Flush",
        levelupvalue: {
            chip: 40,
            mult: 4,
        },
        get mult() {
            return (this.level - 1) * this.levelupvalue.mult + 8
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 100
        },
        timesPlayed: 0
    },
    'Royal Flush': {
        level: 1,
        nameHand: "Royal Flush",
        levelupvalue: {
            chip: 40,
            mult: 4,
        },
        get mult() {
            return (this.level - 1) * this.levelupvalue.mult + 8
        },
        get chip() {
            return (this.level - 1) * this.levelupvalue.chip + 100
        },
        timesPlayed: 0
    }
}

//phân loại hand bài người chơi đánh
const handRanking = (hand) => {
    const suits = hand.map(card => card.suit) // tách suit thành 1 mảng
    const names = hand.map(card => card.getRank()).sort((a, b) => a - b) // tách name thành 1 mảng

    const countPlayCard = hand.length; //độ dài hand bài
    const isFlush = suits.every(suit => suit === suits[0]) && countPlayCard === HandMax; // kiểm tra xem các lá bài trong hand có đồng chất không
    let isStraight = names.every((value, index, arr) => {
        return index === 0 || value === arr[index - 1] + 1
    }) || JSON.stringify(names) === JSON.stringify([0, 1, 2, 3, 12]); // A2345
    if (countPlayCard < HandMax) {
        isStraight = false // kiểm tra số lượng
    }
    const counts = {}; //đếm
    names.forEach(name => counts[name] = (counts[name] || 0) + 1); // đếm số lá trùng name để ghép thành 1 đôi
    const countValues = Object.values(counts).sort((a, b) => b - a).join(''); // chuyển thành chuỗi
    // console.log(isStraight)
    if (isFlush && isStraight && Math.max(...names) === 12) return handRankingOption['Royal Flush'];
    if (isFlush && isStraight) return handRankingOption['Straight Flush'];
    if (countValues === '41') return handRankingOption['Four of a Kind'];
    if (countValues === '32') return handRankingOption['Full House'];
    if (isFlush) return handRankingOption['Flush'];
    if (isStraight) return handRankingOption['Straight'];
    if (countValues === '311') return handRankingOption['Three of a Kind'];
    if (countValues === '221') return handRankingOption['Two Pair'];
    if (countValues === '2111') return handRankingOption['Pair'];
    if (countValues === '5') return handRankingOption['Five of a Kind']
    return handRankingOption['High Card'];


}

export default {
    handRankingOption,
    handRanking
}