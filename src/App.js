import React from 'react';
import './App.css';
import BreweryContainer from './containers/BreweryContainer'

class App extends React.Component {

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
          //jumbotron 
          Click here to begin...
          Welcome to BreweryHop: 
          Planning a visit to NYC? Check out some of the best breweries here! 
        </header> */}
          <BreweryContainer />
      </div>
      
    );
  }
}

export default App;
