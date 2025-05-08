import { useEffect, useState } from "react";
import "./card.css"
import { useDispatch, useSelector } from "react-redux";

const Card = ({ infoCard, choosing = 0, disableOnClick, index, position, scale = 1, rotateZ = 0, handleDragStart, handleDrop }) => {
    const [transformStyle, setTransformStyle] = useState('rotateX(0deg) rotateY(0deg)');
    const [chooseCard, setChooseCard] = useState(false);
    const [triggerSoundChooseCard, setTriggerSoundChooseCard] = useState();
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
    useEffect(() => {

    }, [chooseCard])
    const choosingCards = useSelector((state) => state.PlayedCardReducer); //danh sach card đang chọn

    const handleChoose = () => {
        let nextChoosingCards = [...choosingCards]; // cập nhật tức thì
        const isSelected = chooseCard;
        if (!isSelected && choosingCards.length < 5) {
            setTriggerSoundChooseCard(true)//khi card duoc chon thi phat am thanh card1.ogg
            setChooseCard(true);
            nextChoosingCards.push(infoCard);
            dispatch({ type: 'AddCard', payload: infoCard });
        } else if (isSelected) {
            setTriggerSoundChooseCard(false)//Khi card duoc chon thi phat am thanh card3.ogg
            setChooseCard(false);
            nextChoosingCards = nextChoosingCards.filter(card => card.id !== infoCard.id);
            dispatch({ type: 'RemoveCard', payload: infoCard });
        }

        dispatch({
            type: "CheckHand",
            payload: nextChoosingCards
        });
    }



    const styleCard = {
        transform: `  translateX(${rotateZ * 80}px)` + transformStyle + `rotateZ(${rotateZ}deg)`,
        left: `calc(50% - ${142 * scale / 2}px)`,//can giua vao vung drawcard cho la bai rut 
        top: `calc(50% - ${190 / 0.9 * scale / 2}px - ${choosing}px)`,//can giua vao vung drawcard cho la bai rut *0.9 vì phần cardDraw-container làm nền chiếm 90% đoạn sau là tạo hiệu ứng chọn lá bài
        width: 142 * scale,
        height: 190 * scale,

        zIndex: 9900,
    }

    const styleFaceCard = {
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/basic-card.png')`, // them ten repo de anh k loi khi co homepage o package.json
        backgroundSize: 1846 * scale,
        backgroundPosition: `${position.width * scale}px ${position.height * scale}px`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white',
    }
    const styleBackCard = {
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/deck/Balatro-red_deck.webp')`, // them ten repo de anh k loi
        backgroundSize: 140 * scale,
        backgroundRepeat: 'no-repeat',
    }
    return <div
        draggable
        onDragStart={() => handleDragStart(index)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDrop(index)}
        onClick={disableOnClick === true ? () => { } : handleChoose}
        onMouseLeave={(e) => setTransformStyle('rotateX(0deg) rotateY(0deg)')}
        onMouseMove={(e) => handleMouseMove(e)}
        style={styleCard} className="card ">
        <div className="calc-score-card pixel-corners">
            <div className="padding pixel-corners">
                <div className="name-of-card pixel-corners">{infoCard.rank} of <span className={infoCard.suit}>{infoCard.suit}</span></div>
                <div className="value-of-card pixel-corners">
                    <div className="chip">+{infoCard.points()} chips</div>
                    <div className="mult"></div> {/* coming soon */}
                </div>
            </div>
        </div>
        <div className="card-inner">
            <div className="card-front" style={styleFaceCard}>

            </div>
            <div className="card-back" style={styleBackCard}>

            </div>
            {triggerSoundChooseCard === true && <audio preload="auto" src={`${process.env.PUBLIC_URL}/Sounds/card1.ogg`} autoPlay></audio>}
            {triggerSoundChooseCard === false && <audio preload="auto" src={`${process.env.PUBLIC_URL}/Sounds/card3.ogg`} autoPlay></audio>}
        </div>

    </div>
}

export default Card