import { useSelector } from "react-redux"
import "./blind.css"

const Blind = () => {
    const { blindName, blindValue } = useSelector(state => state.ChallangeBlindReducer)
    return <div className="blind pixel-corners">
        <h3 className="blind-name pixel-corners wave-text">
            {blindName && blindName.split('').map((value) => {
                return <span>
                    {value}
                </span>
            })}
        </h3>
        <div className="info-blind pixel-corners">
            <div className="icon">
                <img src={`${process.env.PUBLIC_URL}/assets/blind/Small_Blind.webp`} width={80} height={80} alt="blind" />
            </div>
            <div className="at-least pixel-corners">
                <p>Score at least</p>
                <div >
                    <span className="chip-img"></span>

                    <span className="chip-required">{blindValue}</span>
                </div>
                <p>Reward: <span className="gold">$$$</span></p>
            </div>

        </div>
    </div>
}
export default Blind