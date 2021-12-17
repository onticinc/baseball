import React, { Component } from "react";

class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="post" key={this.props.index} >
                <div className="card">
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
                            <h1>{this.props.about}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;



