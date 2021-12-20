import React, { Component } from 'react';
import './card.css';

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

class Card extends Component {
    render() {
      return (
        <div>
             <div className="post" >  {/* is this necessary? */}
                <div className="card" key={this.props.idx}>
                    <div className="card-image">
                        <figure className="image is-2by1">
                            <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        </figure>
                    </div> 
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{this.props.name}</p>
                                <p className="subtitle is-6">{this.props.team}</p>
                            </div>
                        </div>

                        <div className="content">
                        <p className="subtitle is-6">{this.props.about}</p>
                        </div>
                    </div>
                </div>
                {baseballCards}
            </div>
        </div>
      );
    }
  }
  
const baseballCards = baseballInfo.map((player, idx) => {
    return (
        <Card key={idx} name={player.name} team={player.team} about={player.about}/>  
    );
});
  

export default Card;