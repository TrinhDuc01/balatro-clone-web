import { useDispatch, useSelector } from "react-redux"
import "./cardDraw.css"
import Card from "../../Card/Card"
import { useState } from "react";

const CardDraw = () => {
    const [draggedIndex, setDraggedIndex] = useState(null);
    const dispatch = useDispatch()
    const drawCard = useSelector((state) => {
        console.log(state.DrawCardReducer)
        return state.DrawCardReducer.drawCard
    })

    const handleDragStart = (index) => {
        console.log(index)
        setDraggedIndex(index);
    };

    const handleDrop = (dropIndex) => {
        console.log(dropIndex)
        if (draggedIndex !== null && draggedIndex !== dropIndex) {
            const updatedArray = [...drawCard];
            const [movedImage] = updatedArray.splice(draggedIndex, 1);
            updatedArray.splice(dropIndex, 0, movedImage);
            dispatch({ type: "ChangIndex", payload: updatedArray })
        }
    };

    return <div className="card-draw">
        {drawCard && drawCard.map((ele, index) => {

            const maxAngle = 10;//độ nghiêng của lá
            const numCards = drawCard.length //số lượng lá bài
            const angle = (index / (numCards - 1) - 0.5) * maxAngle;//tính góc cho mỗi lá
            return <Card
                handleDragStart={handleDragStart}
                handleDrop={handleDrop}
                index={index} key={index} position={ele.position} scale={0.77} rotateZ={angle}>

            </Card>
        })}
        <div className="card-draw-container pixel-corners">
        </div>
        <div className="card-draw-quantity">
            8/8
        </div>
    </div>
}

export default CardDraw