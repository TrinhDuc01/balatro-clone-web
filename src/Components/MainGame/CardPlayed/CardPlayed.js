import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./cardPlayed.css";
import Card from "../../Card/Card";

const CardPlayed = () => {
    const playedCard = useSelector(state => state.PlayedCardReducer);
    const { isCalculate } = useSelector(state => state.RoundScoreReducer);
    const { CardScore } = useSelector(state => state.PokerHandReducer);

    const [choosingCards, setChoosingCards] = useState([]);

    useEffect(() => {
        if (playedCard && isCalculate) {
            setChoosingCards([]); // Reset trước
            setTimeout(() => {
                CardScore.forEach((card, idx) => {
                    setTimeout(() => {
                        setChoosingCards(prev => [...prev, card.id]);
                    }, idx * 500); // Mỗi lá cách nhau 0.1s
                });
            }, 300); // Bắt đầu sau 0.5s
        }
    }, [playedCard, isCalculate, CardScore]);

    return (
        <div className="played-card">
            {playedCard && isCalculate && playedCard.map((ele, index) => {
                const isChosen = choosingCards.includes(ele.id);
                const choosing = isChosen ? 30 : 0;

                const maxAngle = 7;
                const numCards = playedCard.length;
                const angle = (index / (numCards - 1) - 0.5) * maxAngle;

                return (
                    <Card
                        infoCard={ele}
                        choosing={choosing}
                        handleDragStart={() => {}}
                        handleDrop={() => {}}
                        index={index}
                        key={ele.id}
                        position={ele.position}
                        scale={0.77}
                        rotateZ={angle}
                        disableOnClick={true}
                    />
                );
            })}
        </div>
    );
};

export default CardPlayed;
