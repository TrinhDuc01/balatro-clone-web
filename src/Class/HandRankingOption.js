let HandMax = 5
// các loại Hand trong balatro

const nohand = {
    level: '0',
    nameHand: "",
    levelupvalue: {
        chip: 15,
        mult: 1,
    },
    get mult() {// update điểm chip theo cấp của hand
        return 0
    },
    get chip() {
        return 0
    },
    timesPlayed: 0
}
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
    if (hand.length === 0) return { rank: nohand, usedCards: [] };

    const suits = hand.map(card => card.suit);
    const names = hand.map(card => card.getRank()).sort((a, b) => a - b);
    const countPlayCard = hand.length;

    const isFlush = suits.every(suit => suit === suits[0]) && countPlayCard === HandMax;
    let isStraight = names.every((value, index, arr) => index === 0 || value === arr[index - 1] + 1)
        || JSON.stringify(names) === JSON.stringify([0, 1, 2, 3, 12]); // A2345
    if (countPlayCard < HandMax) isStraight = false;

    const counts = {};
    hand.forEach(card => {
        const name = card.getRank();
        counts[name] = (counts[name] || []);
        counts[name].push(card);
    });

    const countValues = Object.values(counts).map(arr => arr.length).sort((a, b) => b - a).join('');

    // ===== Tìm các lá dùng trong combo =====
    let usedCards = [];

    if (isFlush && isStraight && Math.max(...names) === 12) {
        usedCards = [...hand];
        return { rank: handRankingOption['Royal Flush'], usedCards };
    }

    if (isFlush && isStraight) {
        usedCards = [...hand];
        return { rank: handRankingOption['Straight Flush'], usedCards };
    }

    if (countValues.includes('4')) {
        // lấy 4 lá giống nhau
        usedCards = Object.values(counts).find(arr => arr.length === 4);
        return { rank: handRankingOption['Four of a Kind'], usedCards };
    }

    if (countValues.includes('32')) {
        const three = Object.values(counts).find(arr => arr.length === 3);
        const pair = Object.values(counts).find(arr => arr.length === 2);
        usedCards = [...three, ...pair];
        return { rank: handRankingOption['Full House'], usedCards };
    }

    if (isFlush) {
        usedCards = [...hand];
        return { rank: handRankingOption['Flush'], usedCards };
    }

    if (isStraight) {
        usedCards = [...hand];
        return { rank: handRankingOption['Straight'], usedCards };
    }

    if (countValues.includes('3')) {
        usedCards = Object.values(counts).find(arr => arr.length === 3);
        return { rank: handRankingOption['Three of a Kind'], usedCards };
    }

    if (countValues.includes('22')) {
        const pairs = Object.values(counts).filter(arr => arr.length === 2).slice(0, 2);
        usedCards = [...pairs[0], ...pairs[1]];
        return { rank: handRankingOption['Two Pair'], usedCards };
    }

    if (countValues.includes('2')) {
        usedCards = Object.values(counts).find(arr => arr.length === 2);
        return { rank: handRankingOption['Pair'], usedCards };
    }

    if (countValues.includes('5')) {
        usedCards = Object.values(counts).find(arr => arr.length === 5);
        return { rank: handRankingOption['Five of a Kind'], usedCards };
    }

    // Mặc định chọn lá cao nhất
    usedCards = [hand.reduce((a, b) => a.getRank() > b.getRank() ? a : b)];
    return { rank: handRankingOption['High Card'], usedCards };
}


export {
    handRankingOption,
    handRanking,
    nohand
}