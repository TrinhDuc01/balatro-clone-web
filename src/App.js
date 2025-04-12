
import handRanking from './Class/HandRankingOption';
import PlayCard from './Class/PlayCard';
import BackgroundCanvas from './Components/Background/BackgroundCanvas';
import Card from './Components/Card';

function App() {

  console.log(handRanking([
    new PlayCard('Ace', 'spread'),
    new PlayCard('5', 'Club'),
    new PlayCard('3', 'spread'),
    new PlayCard('4', 'spread'),
    new PlayCard('Ace', 'spread'),
  ]))
  return (
    <div className="App" style={{backgroundColor:"black",width:'100vw',height:'100vh'}}>
      {/* <Card/> */}
      <BackgroundCanvas/>
    </div>
  );
}

export default App;
