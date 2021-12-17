import logo from './logo.svg';
import './App.css';
import Player from './Player';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        <Player />
      </header>
    </div>
  );
}

export default App;
