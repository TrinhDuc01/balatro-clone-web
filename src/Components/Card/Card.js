import { useState } from "react";
import "./card.css"
import { useDispatch, useSelector } from "react-redux";

const Card = ({ infoCard, index, position, scale = 1, rotateZ = 0, handleDragStart, handleDrop }) => {
    const [transformStyle, setTransformStyle] = useState('rotateX(0deg) rotateY(0deg)');
    const [chooseCard, setChooseCard] = useState(false)
    const [countCardPlayed, setCountCardPlayed] = useState(0)
    const dispatch = useDispatch();
    const handleMouseMove = (e) => {
        const card = e.target.getBoundingClientRect();
        const x = e.clientX - card.left;
        const y = e.clientY - card.top;

        const centerX = card.width / 2;
        const centerY = card.height / 2;

        const rotateX = ((y - centerY) / centerY) * 20; // độ nghiêng trục X
        const rotateY = ((x - centerX) / centerX) * 20; // độ nghiêng trục Y

        setTransformStyle(`perspective(400px) scale(1.2,1.2) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`);
    }

    const PlayedCard = useSelector(state => state.PlayedCardReducer)
    console.log(PlayedCard)
    const handleChoose = () => {
        if (!chooseCard === true && PlayedCard.length < 5) {
            setChooseCard(!chooseCard); // khi card được chọn thì nó sẽ nhích lên 20px
            dispatch({
                type: "AddCard",
                payload: infoCard
            })
            setCountCardPlayed(countCardPlayed + 1)
        }
        if (!chooseCard === false) {
            setChooseCard(!chooseCard); // khi card được chọn thì nó sẽ nhích lên 25px
            dispatch({
                type: "RemoveCard",
                payload: infoCard
            })
            setCountCardPlayed(countCardPlayed - 1)
        }
    }

    const styleCard = {
        transform: `  translateX(${rotateZ * 80}px)` + transformStyle + `rotateZ(${rotateZ}deg)`,
        left: `calc(50% - ${142 * scale / 2}px)`,//can giua vao vung drawcard cho la bai rut 
        top: `calc(50% - ${190 / 0.9 * scale / 2}px - ${!chooseCard ? 0 : chooseCard ? 30 : -30}px)`,//can giua vao vung drawcard cho la bai rut *0.9 vì phần cardDraw-container làm nền chiếm 90% đoạn sau là tạo hiệu ứng chọn lá bài
        width: 142 * scale,
        height: 190 * scale,

        zIndex: 9900,
    }

    const styleFaceCard = {
        backgroundImage: `url('/assets/basic-card.png')`,
        backgroundSize: 1846 * scale,
        backgroundPosition: `${position.width * scale}px ${position.height * scale}px`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white',
    }
    const styleBackCard = {
        backgroundImage:`url('/assets/deck/Balatro-red_deck.webp')`,
        backgroundSize:140*scale,
        backgroundRepeat: 'no-repeat',
    }
    return <div
        draggable
        onDragStart={() => handleDragStart(index)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDrop(index)}
        onClick={handleChoose}
        onMouseLeave={(e) => setTransformStyle('rotateX(0deg) rotateY(0deg)')}
        onMouseMove={(e) => handleMouseMove(e)}
        style={styleCard} className="card ">
        <div className="card-inner">
            <div className="card-front" style={styleFaceCard}>
                
            </div>
            <div className="card-back" style={styleBackCard}>
            
            </div>
        </div>

    </div>
}

export default Card