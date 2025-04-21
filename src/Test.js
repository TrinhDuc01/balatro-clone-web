import React, { useState } from 'react';

const cards = [
    { id: 1, name: 'A' },
    { id: 2, name: 'K' },
    { id: 3, name: 'Q' },
    { id: 4, name: 'J' },
];

function getCardPoint(card) {
    // Ví dụ quy tắc tính điểm
    const points = { A: 1, K: 10, Q: 10, J: 10 };
    return points[card.name] || 0;
}

function Test() {
    const [cardStates, setCardStates] = useState(
        cards.map(card => ({ ...card, point: null }))
    );
    const [calculating, setCalculating] = useState(false);

    const handleCalculatePoints = async () => {
        setCalculating(true);

        for (let i = 0; i < cardStates.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));

            setCardStates(prev => {
                const newCards = [...prev];
                newCards[i] = {
                    ...newCards[i],
                    point: getCardPoint(newCards[i])
                };
                return newCards;
            });
        }

        setCalculating(false);
    };

    return (
        <div>
            <h2>Cards:</h2>
            <ul>
                {cardStates.map(card => (
                    <li key={card.id} style={{ color: "white" }}>
                        {card.name} - {card.point !== null ? `Point: ${card.point}` : 'Calculating...'}
                    </li>
                ))}
            </ul>
            <button onClick={handleCalculatePoints} disabled={calculating}>
                Tính điểm
            </button>
        </div>
    );
}

export default Test;
