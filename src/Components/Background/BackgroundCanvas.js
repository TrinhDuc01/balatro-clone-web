import { Canvas } from 'glsl-canvas-js';
import React, { useEffect } from 'react';
import "./backgroundCss.css"
import fragmentShader from "./Shader"
const BackgroundCanvas = () => {
    useEffect(()=>{
        const canvas = document.getElementById('canvas');

        const glsl = new Canvas(canvas);

        glsl.load(fragmentShader)
    },[])

    return (
        <canvas
            id='canvas'
        />
    );
};

export default BackgroundCanvas;