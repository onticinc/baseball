import React, { Component } from 'react';

// Basketball

const baseballPayload = [
    {
        name: 'Randy Johnson',
        team: 'Mariners',
    },
    {
        name: 'Ken Griffy Jr.',
        team: 'Mariners',
    },
    {
        name: 'King Felix',
        team: 'Mariners',
    },

];

const displayBaseballPlayers = baseballPayload.map((player, idx) => {
    return (
        <div key={idx}>
            <h1>Name {player.name}</h1>
            <p> Team {player.team}</p>
        </div>
    );
});

// // will be an array of all players on Team 4
// const searchTeam4 = bballPayload.filter((player, idx) => {
//     if (player.team === 'Team 4') {
//         return true;
//     } else {
//         return false;
//     }
// });

// const displayTeam4 = searchTeam4.map((player, idx) => {
//     return (
//         <div key={idx}>
//             <h1>Player {player.name}</h1>
//             <p>Team {player.team}</p>
//         </div>
//     )
// });

class Basketball extends Component {
    render() {
        return (
            <div>
                <h1>Basketball</h1>
                <div>
                    <h1>{basketPlayer.name}</h1>
                    <p>{basketPlayer.team}</p>
                </div>
                {displayBasketballPlayers}
            </div>
        )
    }
}

export default Basketball;