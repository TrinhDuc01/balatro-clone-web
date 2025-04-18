import { useState } from "react";
import "./card.css"

const Card = ({ index, position, scale = 1, rotateZ = 0, handleDragStart, handleDrop }) => {
    const [transformStyle, setTransformStyle] = useState('rotateX(0deg) rotateY(0deg)');

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

    const style = {
        transform: `  translateX(${rotateZ * 80}px)` + transformStyle + `rotateZ(${rotateZ}deg)`,
        left: `calc(50% - ${142 * scale / 2}px)`,//can giua vao vung drawcard cho la bai rut 
        top: `calc(50% - ${190 / 0.9 * scale / 2}px)`,//can giua vao vung drawcard cho la bai rut *0.9 vì phần cardDraw-container làm nền chiếm 90%
        width: 142 * scale,
        height: 190 * scale,
        backgroundImage: `url('/assets/basic-card.png')`,
        backgroundSize: 1846 * scale,
        backgroundPosition: `${position.width * scale}px ${position.height * scale}px`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white',
        zIndex: 9900,
    }
    return <div
        draggable
        onDragStart={() => handleDragStart(index)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDrop(index)}
        onMouseLeave={(e) => setTransformStyle('rotateX(0deg) rotateY(0deg)')}
        onMouseMove={(e) => handleMouseMove(e)}
        style={style} className="card ">


    </div>
}

export default Card