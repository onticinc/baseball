import './App.css';
import Card from './Card';
// import Equipment from './Equipment';
import React from 'react';

// Equipment
const equipmentInfo = [
  {
      name: 'Bat',
      description: '',
      belongsTo: 'Player for the mariners in the 90s',
  },
  {
      name: 'Ken Griffy Jr.',
      team: 'Mariners',
      about: 'Player for the mariners in the 90s',
  },
  {
      name: 'King Felix',
      team: 'Mariners',
      about: 'Player for the mariners in the 90s',
  },
];



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />

      </header>
    </div>
  );
}

export default App;
