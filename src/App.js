
import handRanking from './Class/HandRankingOption';
import PlayCard from './Class/PlayCard';

function App() {

  console.log(handRanking([
    new PlayCard('2', 'spread'),
    new PlayCard('5', 'spread'),
    new PlayCard('3', 'spread'),
    new PlayCard('4', 'spread'),
    new PlayCard('Ace', 'spread'),
  ]))
  return (
    <div className="App">

    </div>
  );
}

export default App;
