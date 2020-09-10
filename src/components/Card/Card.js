import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Card extends Component {

  constructor(props) {
    super(props);

    
  }

  render() {

    const linkMovieDetails = {
      pathname: "/movie/" + this.props.movieID,
      state: this.props
    }
    

    var cardStyle = {
      width: "30rem"
    };

    return ( 
      <div className="card ml-4 mt-4" style={cardStyle}>
        <img className="card-img-top" src={this.props.moviePoster} alt="" />
        <div className="card-body h-100">
          <h2 className="card-title">{this.props.movieTitle} </h2>
          <p className="card-text">{this.props.movieDescription.substring(0, 150)}...</p>
          <Link to={linkMovieDetails}  className="btn btn-primary">Details</Link>
        </div>
      </div>
    );
  }
}

export default Card;
