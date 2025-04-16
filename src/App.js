
import { useEffect } from 'react';
import handRanking from './Class/HandRankingOption';
import PlayCard from './Class/PlayCard';
import BackgroundHomeCanvas from './Components/BackgroundHome/BackgroundHomeCanvas';
import ButtonToggleMusic from './Components/BackgroundMusic/ButtonToggleMusic';
import Card from './Components/Card/Card';
import Deck from './Components/Deck/Deck';
import Combine from './Components/MainGame/Combine/Combine';
import { useDispatch, useSelector } from 'react-redux';
import DrawCardReducer from './Redux/reducers/DrawCardReducer';

function App() {

  // console.log(handRanking([
  //   new PlayCard('Ace', 'spread'),
  //   new PlayCard('5', 'Club'),
  //   new PlayCard('3', 'spread'),
  //   new PlayCard('4', 'spread'),
  //   new PlayCard('Ace', 'spread'),
  // ]))
  // console.log(Deck())
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'InitDeckRoot', payload: Deck() })
  }, [])

  const drawCard = useSelector((state) => {
    console.log(state.DrawCardReducer)
    return state.DrawCardReducer.drawCard
  })

  const remainingCards = useSelector((state) => {
    return state.DrawCardReducer.remainingCards
  })


  const handleDrawCard = () => {
    dispatch({
      type: "Draw",
      deck: remainingCards,
      num: 8,

    })
  }


  return (
    <div className="App" style={{ backgroundColor: "black", width: '100vw', height: '100vh' }}>
      {drawCard&&drawCard.map((ele,index)=>{
        return <Card key={index} left={index*40} position={ele.position}>

        </Card>
      })}
      <div onClick={handleDrawCard} style={{ position: 'absolute', zIndex: 10000, backgroundColor: 'red' }}>
        Rut bai
      </div>
      <Combine />
      <BackgroundHomeCanvas />
      <ButtonToggleMusic />
    </div>
  );
}

export default App;
