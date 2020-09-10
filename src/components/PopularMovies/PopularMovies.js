import React, { Component } from 'react';
import Card from '../Card/'

const apiKey = "651538de087f3f0925486d91bb7b1e73";
const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + apiKey;
const posterPath = "https://image.tmdb.org/t/p/w500/"

class PopularMovies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popularMovies: []
        };
    }

    getPopularMovies = () => {

        fetch(apiURL, {
            method: "GET" // POST
        }).then(res => res.json())
        .then(res => {
          this.setState({ popularMovies: res.results})
        })
        .then(res => console.log(this.state))
        .catch(e => console.log(e))
    }

    componentDidMount(){
        this.getPopularMovies()
    }
    

    render() { 

        var containerStyle = {
            width: "20rem"
          };

       // const { isLoaded, forecast, cityID, cityName, weatherIcon } = this.state;
       const { popularMovies } = this.state
       var linkMovieDetails = ""

        return ( 
            <div>
                <div className="cardContainer">
                    <div className="row">
                        {
                            popularMovies.map((m) => {

                                linkMovieDetails = "https://api.themoviedb.org/3/movie/" + m.id + "?api_key=" + apiKey

                                return(
                                    <Card 
                                            key={m.id}
                                            movieID={m.id} 
                                            movieTitle={m.title} 
                                            movieDescription={m.overview} 
                                            moviePoster = {posterPath + m.backdrop_path}
                                            movieDetailsURL = {linkMovieDetails} />
                                )
                            })
                        }
                    </div> 
                </div>
            </div>
         );
    }
}
 
export default PopularMovies;