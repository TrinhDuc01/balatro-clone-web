
import { useEffect, useState } from 'react';

import BackgroundHomeCanvas from './Components/BackgroundHome/BackgroundHomeCanvas';
import ButtonToggleMusic from './Components/BackgroundMusic/ButtonToggleMusic';
import Deck from './Components/Deck/Deck';
import Combine from './Components/MainGame/Combine/Combine';
import { useDispatch, useSelector } from 'react-redux';
import GameOver from './Components/MainGame/GameOver/GameOver';
import GameWin from './Components/MainGame/GameWin/GameWin';



function App() {
  const [start, setStart] = useState(0)
  const { gameOver, gameWin } = useSelector(state => state.HandsDiscardsReducer)
    const { hands } = useSelector(state => state.HandsDiscardsReducer)
    const { DeckAllGame } = useSelector((state) => state.DrawCardReducer)
  // console.log(remainingCards)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'InitDeckRoot', payload: Deck() })
    dispatch({
      type: "Draw",
      deck: DeckAllGame,
      num: 8,
    })
    //Trick lỏd boc bai
    if (start === 0) {
      setTimeout(() => {
        setStart(1);
      }, 100)
    }
  }, [start])
  // console.log(start)
  useEffect(() => {
    if (gameWin == false) {
      dispatch({
        type: "Draw",
        deck: DeckAllGame,
        num: 8,
      })
    }
  }, [gameWin])

  return (
    <div className="App" style={{ backgroundColor: "black", width: '100vw', height: '100vh' }}>
      <Combine />
      <BackgroundHomeCanvas />
      <ButtonToggleMusic />
      {gameOver && <GameOver />}
      {/* {gameWin && <GameWin />} */}
    </div>
  );
}

export default App;
