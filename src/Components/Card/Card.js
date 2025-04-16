import { useState } from "react";
import "./card.css"

const Card = ({ margin }) => {
    const [transformStyle, setTransformStyle] = useState('rotateX(0deg) rotateY(0deg)');

    const handleMouseMove = (e) => {
        const card = e.target.getBoundingClientRect();
        const x = e.clientX - card.left;
        const y = e.clientY - card.top;

        const centerX = card.width / 2;
        const centerY = card.height / 2;

        const rotateX = ((y - centerY) / centerY) * 30; // độ nghiêng trục X
        const rotateY = ((x - centerX) / centerX) * 30; // độ nghiêng trục Y

        setTransformStyle(`perspective(400px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`);
    }
    return <div
        onMouseLeave={(e)=> setTransformStyle()}
        onMouseMove={(e) => handleMouseMove(e)}
        style={{ transform: transformStyle,left:margin }} className="card ">

    </div>
}

export default Card