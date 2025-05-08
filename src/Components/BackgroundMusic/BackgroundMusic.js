import { useEffect } from "react"


const BackgroundMusic = () => {
    useEffect(() => {
        document.getElementById("background-audio").volume = 0.4
    })

    return <div>
        <audio preload="auto" id="background-audio" src={`${process.env.PUBLIC_URL}/Sounds/01. Main Theme.mp3`} autoPlay loop></audio>
    </div>
}

export default BackgroundMusic