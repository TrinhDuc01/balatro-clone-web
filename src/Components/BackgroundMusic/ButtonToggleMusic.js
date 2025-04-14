import { useState } from "react"
import "./backgroundMusic.css"
import BackgroundMusic from "./BackgroundMusic"

const ButtonToggleMusic = () => {
    const [toggle, setToggle] = useState(false)
    return <div className="background-music">
        <button onClick={() => setToggle(!toggle)}>
            ♪
        </button>

        {toggle && <BackgroundMusic/>}
    </div>
}

export default ButtonToggleMusic