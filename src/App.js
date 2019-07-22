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
              <h1> <i style={{ position: 'relative'}} class="beer icon"></i>BreweryHop</h1>
              <p>
                Best Breweries in Chicago, IL
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