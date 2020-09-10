import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/'
import Footer from './components/Footer/'
import PopularMovies from './components/PopularMovies/'
import MovieDetails from './components/MovieDetails/'
import Error from './components/Error/'

// import logo from './logo.svg';
import './App.css';
//import Flippy, { FrontSide, BackSide } from 'react-flippy';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {   
        // options: [
        //     { value: true, label: 'Yes' },
        //     { value: false, label: 'No' }
        // ],
    };
  }

  componentDidMount() {
    //this.getWeather();    
  }

  render() {    

    return(                      
          <Router>
            <div id="root-container">
              <Header /> 
              <div className="container">
                <Switch>
                  <Route path="/" component={PopularMovies} exact />
                  <Route path="/movie/:id" component={MovieDetails} />
                  <Route component={Error} />
                </Switch>
              </div>
              <Footer /> 
            </div>
          </Router>
    )  
  }
}

export default App;
