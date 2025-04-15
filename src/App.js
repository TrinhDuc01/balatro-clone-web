
import handRanking from './Class/HandRankingOption';
import PlayCard from './Class/PlayCard';
import BackgroundHomeCanvas from './Components/BackgroundHome/BackgroundHomeCanvas';
import ButtonToggleMusic from './Components/BackgroundMusic/ButtonToggleMusic';
import Card from './Components/Card/Card';
import Deck from './Components/Deck/Deck';
import Combine from './Components/MainGame/Combine/Combine';

function App() {

  console.log(handRanking([
    new PlayCard('Ace', 'spread'),
    new PlayCard('5', 'Club'),
    new PlayCard('3', 'spread'),
    new PlayCard('4', 'spread'),
    new PlayCard('Ace', 'spread'),
  ]))
  console.log(Deck())
  return (
    <div className="App" style={{ backgroundColor: "black", width: '100vw', height: '100vh' }}>


      {/* <Card margin={0}/>
      <Card margin={50}/>
      <Card margin={100}/> */}
        <Combine/>
      <BackgroundHomeCanvas/>
      <ButtonToggleMusic />
    </div>
  );
}

export default App;
