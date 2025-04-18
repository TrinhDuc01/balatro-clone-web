import ButtonFunction from "../ButtonFunction/ButtonFunction"
import CardDraw from "../CardDraw/CardDraw"
import CardPlayed from "../CardPlayed/CardPlayed"
import Consumable from "../Consumable/Consumable"
import Deck from "../Deck/Deck"
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
                    <div className="container-card">
                        <CardPlayed />
                        <CardDraw />
                        <ButtonFunction />
                    </div>
                    <Deck />
                </div>
            </div>

        </div>
    )
}

export default Combine