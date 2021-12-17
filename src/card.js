import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="post" >
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
        );
    }

}

export default Card;



