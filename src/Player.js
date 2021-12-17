import React, { Component } from 'react';
import './player.css';
import Card from './card';

// Basketball

const baseballPayload = [
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

const displayBaseballPlayers = baseballPayload.map((player, idx) => {
    return (
        <Card key={idx} index={idx} name={player.name} team={player.team} />  
    );
});

 
  
class Player extends Component {
    render() {
      return (
        <div>
            <Card key={idx} index={idx} name={player.name} team={player.team} />  
        </div>
      );
    }
  }
  
  export default Player;