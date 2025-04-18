import { useSelector } from "react-redux"
import "./cardDraw.css"
import Card from "../../Card/Card"

const CardDraw = () => {
    const drawCard = useSelector((state) => {
        console.log(state.DrawCardReducer)
        return state.DrawCardReducer.drawCard
    })
    return <div className="card-draw">
            {drawCard && drawCard.map((ele, index) => {
                return <Card key={index} left={index * 40} position={ele.position} scale={0.77}>

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