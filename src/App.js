import React from 'react';
//import logo from './logo.svg';
import './App.css';
import BreweryContainer from './containers/BreweryContainer'
import Brewery from './components/Brewery'
import { Route } from 'react-router-dom';
//import axios from 'axios';
//const API_URL = 'https://api.openbrewerydb.org/breweries';

class App extends React.Component {
  //function App(){}

  // state = {
  //   breweries: []
  // }

  // componentDidMount(){
  //   const url = `${API_URL}`;
  //   axios.get(url)
  //     .then(response => response.data)
  //     .then((data) => {
  //       this.setState({
  //         breweries: data
  //       })
  //       console.log(this.state.breweries);     
  //     })
  // }

  render(){
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          Click here to begin...
          Welcome to BreweryHop: 
          Planning a visit to NYC? Check out some of the best breweries here! 
        </header> */}
        <header>
            {/* <Route exact path="/brewery" component={Brewery} />  */}
        </header>

          <BreweryContainer />

      </div>
      
    );
  }
}

export default App;
