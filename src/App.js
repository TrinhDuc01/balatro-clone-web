
import { useEffect, useState } from 'react';

import BackgroundHomeCanvas from './Components/BackgroundHome/BackgroundHomeCanvas';
import ButtonToggleMusic from './Components/BackgroundMusic/ButtonToggleMusic';

import Deck from './Components/Deck/Deck';
import Combine from './Components/MainGame/Combine/Combine';
import { useDispatch, useSelector } from 'react-redux';
import { handRanking } from './Class/HandRankingOption';


function App() {
  console.log(handRanking([
    
  ]))
  const [start,setStart] = useState(0)
  const remainingCards = useSelector((state) => state.DrawCardReducer.remainingCards)
  console.log(remainingCards)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'InitDeckRoot', payload: Deck() })
    dispatch({
      type: "Draw",
      deck: remainingCards,
      num: 8,
    })

    //Trick lỏd
    if(start===0){
      setTimeout(()=>{
        setStart(1);
      },100)
    }
  }, [start])


  return (
    <div className="App" style={{ backgroundColor: "black", width: '100vw', height: '100vh' }}>
      <Combine />
      <BackgroundHomeCanvas />
      <ButtonToggleMusic />
    </div>
  );
}

export default App;
