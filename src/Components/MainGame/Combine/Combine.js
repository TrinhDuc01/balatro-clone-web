import Blind from "../SideBar/Blind/Blind"
import ChipXMult from "../SideBar/ChipXMult/ChipXMult"
import InfoRound from "../SideBar/InfoRound/InfoRound"
import RoundScore from "../SideBar/Round Score/RoundScore"
import "./combine.css"

const Combine = () => {
    return (
        <div className="combine">
            <div className="side-bar">
                <div className="inner-side-bar">
                    <Blind />
                    <RoundScore/>
                    <ChipXMult/>
                    <InfoRound/>
                </div>
            </div>
        </div>
    )
}

export default Combine