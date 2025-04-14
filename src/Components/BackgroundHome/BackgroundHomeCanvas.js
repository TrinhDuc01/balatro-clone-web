import { Canvas } from 'glsl-canvas-js';
import React, { useEffect } from 'react';
import "./backgroundHomeCss.css"
import HomefragmentShader from "./ShaderHomeBackground"
const BackgroundHomeCanvas = () => {
    useEffect(()=>{
        const canvas = document.getElementById('canvas');

        const glsl = new Canvas(canvas);

        glsl.load(HomefragmentShader)
    },[])

    return (
        <canvas
            id='canvas'
        />
    );
};

export default BackgroundHomeCanvas;