//generation deck

import PlayCard from "../../Class/PlayCard";

const Deck = () => {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']; //cấp bậc của lá
    const suits = ['Heart', 'Club', 'Diamond', 'Spread'];//chất của lá bài
    const deck = suits.map((suit, indexSuit) => {
        return ranks.map((rank, indexRank) => {
            return new PlayCard(rank, suit, {
                width: indexRank * -142,
                height: indexSuit * -190
            })
        })
    }).flat() // flat giúp biến 1 mảng [[1,2,3,4],[5,6]] thành [1,2,3,4,5,6]

    return deck
}

export default Deck