import './GameOver.css'
const GameOver = () => {
    return <div id="game-over">
        YOU DIED
        <audio src='./Sounds/you-died.mp3' autoPlay/>
    </div>
}

export default GameOver;