import Consumable from "../Consumable/Consumable"
import Joker from "../Joker/Joker"
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
                    <RoundScore />
                    <ChipXMult />
                    <InfoRound />
                </div>
            </div>
            <div className="playing-area">
                <div className="joker-consumable">
                    <Joker />
                    <Consumable />
                </div>
                <div className="card-deck">
                    <div className="played-card">

                    </div>
                    <div className="container-card">
                            <div className="card-draw">

                            </div>
                            <div className="quantity">
                                8/8
                            </div>
                            <div>
                                <div className="play-sort-discard">

                                </div>

                            </div>
                            <div className="deck"></div>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Combine