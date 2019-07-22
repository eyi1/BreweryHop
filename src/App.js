import React from 'react';
import './App.css';
import BreweryContainer from './containers/BreweryContainer'
import { Jumbotron, Container } from 'react-bootstrap'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Jumbotron fluid>
            <Container>
              <h1> <i style={{ position: 'relative'}} class="beer icon"></i>Welcome to BreweryHop</h1>
              <p>
                We provide the best local breweries in Brooklyn, NY
              </p>
            </Container>
          </Jumbotron>
        </header>
        <body>
          <BreweryContainer />
        </body>
      </div>
      
    );
  }
}

export default App;