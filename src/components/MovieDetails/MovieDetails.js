import React, { Component } from 'react';

import './MovieDetails.css';

const apiKey = "651538de087f3f0925486d91bb7b1e73";
const apiURL = "https://api.themoviedb.org/3/movie/"
const bgPath = "https://image.tmdb.org/t/p/original/"
const posterPath = "https://image.tmdb.org/t/p/w300/"

class MovieDetails extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.match.params.id);

        this.state = {
            movieID: this.props.match.params.id,
            movieDetails: {}
        };
    }

    getMovieDetails = (mID) => {

        fetch(apiURL + mID + "?api_key=" + apiKey, {
            method: "GET" // POST
        }).then(res => res.json())
        .then(res => {
          this.setState({ movieDetails: res})
        })
        .then(res => console.log(this.state))
        .catch(e => console.log(e))
    }

    componentDidMount(){
        this.getMovieDetails(this.state.movieID)
    }
    

    render() { 

        const { movieDetails } = this.state

        var bgImage = bgPath +  movieDetails.backdrop_path
        var posterImage = posterPath +  movieDetails.poster_path
        // var bgImage = "test.jpg"

        console.log(bgImage)

        var containerStyle = {
            // width: "100%",
            // height: "400px",
            // backgroundColor: "#e8ecf1",
            // // backgroundImage: "url(" +  bgImage  + ")",
            // backgroundSize: "100% 400px",
            // backgroundRepeat: "no-repeat"
          };

       // const { isLoaded, forecast, cityID, cityName, weatherIcon } = this.state;
       
       var linkMovieDetails = ""

        return ( 
                <div id="#movie-details-container" style={ containerStyle }>
                    <div className="row">
                        
                     
                    <div className="col">
                        <img src={posterImage} />
                    </div>

                    <div className="col">
                            <h1>{movieDetails.title}</h1>
                        </div>
                    </div>
                    
                </div>
         );
    }
}
 
export default MovieDetails;