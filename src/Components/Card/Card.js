import { useState } from "react";
import "./card.css"

const Card = ({ left, position, scale=1 }) => {
    const [transformStyle, setTransformStyle] = useState('rotateX(0deg) rotateY(0deg)');

    const handleMouseMove = (e) => {
        const card = e.target.getBoundingClientRect();
        const x = e.clientX - card.left;
        const y = e.clientY - card.top;

        const centerX = card.width / 2;
        const centerY = card.height / 2;

        const rotateX = ((y - centerY) / centerY) * 20; // độ nghiêng trục X
        const rotateY = ((x - centerX) / centerX) * 20; // độ nghiêng trục Y

        setTransformStyle(`perspective(400px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`);
    }

    const style = {
        transform: transformStyle,
        left: left,
        width: 142*scale,
        height: 190*scale,
        backgroundImage: `url('/assets/basic-card.png')`,
        backgroundSize: 1846 * scale,
        backgroundPosition: `${position.width * scale}px ${position.height * scale}px`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white'
    }
    return <div
        onMouseLeave={(e) => setTransformStyle()}
        onMouseMove={(e) => handleMouseMove(e)}
        style={style} className="card ">


    </div>
}

export default Card