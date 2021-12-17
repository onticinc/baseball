import React, { Component } from 'react';
import './player.css';

//Components
import Card from './Card';

// Baseball
const baseballInfo = [
    {
        name: 'Randy Johnson',
        team: 'Mariners',
        about: 'Player for the mariners in the 90s',
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

const baseballCards = baseballInfo.map((player, idx) => {
    return (
        <Card key={idx} name={player.name} team={player.team} about={player.about}/>  
    );
});

 
  
class Player extends Component {
    render() {
      return (
        <div>
            <Card key={index} name={player.name} team={player.team} about={player.about}/>  
        </div>
      );
    }
  }
  
  export default Player;