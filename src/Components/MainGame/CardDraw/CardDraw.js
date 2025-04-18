import { useDispatch, useSelector } from "react-redux"
import "./cardDraw.css"
import Card from "../../Card/Card"
import { useEffect, useState } from "react"; // đã có sẵn

const CardDraw = () => {
    const [draggedIndex, setDraggedIndex] = useState(null);
    const [visibleCount, setVisibleCount] = useState(0); // đếm thời gian xuất hiện

    const dispatch = useDispatch();
    const drawCard = useSelector((state) => state.DrawCardReducer.drawCard);
    const choosingCards = useSelector((state) => state.PlayedCardReducer);



    //  Tăng số lá bài được hiển thị dần dần
    useEffect(() => {
        if (!drawCard) return;

        // Chỉ chạy lại hiệu ứng nếu có thêm bài mới
        if (drawCard.length > visibleCount) {
            let i = visibleCount;
            const interval = setInterval(() => {
                i++;
                if (i > drawCard.length) {
                    clearInterval(interval);
                } else {
                    setVisibleCount(i);
                }
            }, 150);

            return () => clearInterval(interval);
        }
    }, [drawCard]);

    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    const handleDrop = (dropIndex) => {
        if (draggedIndex !== null && draggedIndex !== dropIndex) {
            const updatedArray = [...drawCard];
            const [movedImage] = updatedArray.splice(draggedIndex, 1);
            updatedArray.splice(dropIndex, 0, movedImage);
            dispatch({ type: "ChangIndex", payload: updatedArray });
        }
    };

    return (
        <div className="card-draw">
            {drawCard &&
                drawCard.slice(0, visibleCount).map((ele, index) => {
                    let choosing = 0;
                    choosingCards.forEach((card) => {
                        if (card.id === ele.id) {
                            choosing = 30;
                        }
                    });
                    const maxAngle = 10;
                    const numCards = drawCard.length;
                    const angle =
                        (index / (numCards - 1) - 0.5) * maxAngle;
                    return (
                        <Card
                            infoCard={ele}
                            choosing={choosing}
                            handleDragStart={handleDragStart}
                            handleDrop={handleDrop}
                            index={index}
                            key={ele.id}
                            position={ele.position}
                            scale={0.77}
                            rotateZ={angle}
                        />
                    );
                })}
            <div className="card-draw-container pixel-corners"></div>
            <div className="card-draw-quantity">8/8</div>
        </div>
    );
};


export default CardDraw