import "./blind.css"
const blind = ['S', 'm', 'a', 'l', 'l', ' ', 'B', 'l', 'i', 'n', 'd'];
const Blind = () => {
    return <div className="blind pixel-corners">
        <h3 className="blind-name pixel-corners wave-text">
            {blind && blind.map((value) => {
                return <span>
                    {value}
                </span>
            })}
        </h3>
        <div className="info-blind pixel-corners">
            <div className="icon">
                <img src="./assets/blind/Small_Blind.webp" width={80} height={80} alt="blind" />
            </div>
            <div className="at-least pixel-corners">
                <p>Score at least</p>
                <div >
                    <span className="chip-img"></span>

                    <span className="chip-required">300.000.000</span>
                </div>
                <p>Reward: <span className="gold">$$$</span></p>
            </div>

        </div>
    </div>
}
export default Blind