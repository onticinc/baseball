
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
                <nav className="navbar is-dark">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="https://bulma.io/">
                                Home
                            </a>
                            <a className="navbar-item" href="https://bulma.io/">
                                Band
                            </a>
                            <a className="navbar-item" href="https://bulma.io/">
                                Tour
                            </a>
                            <a className="navbar-item" href="https://bulma.io/">
                                Contact
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" href="/documentation/overview/start/">
                                    More
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <a className="navbar-item" href="/documentation/overview/start/">
                                        Mechandise
                                    </a>
                                    <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                        Extras
                                    </a>
                                    <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                        Media
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field">
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Search . . ." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const baseballCards = baseballInfo.map((player, idx) => {
    return (
        <Card key={idx} name={player.name} team={player.team} about={player.about} />
    );
});


export default Card;










