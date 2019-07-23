import React from 'react';
import Brewery from './Brewery';
import 'bootstrap/dist/css/bootstrap.css';

export default class BreweryList extends React.Component {

    render() {
      return (
       <div>
            {this.props.breweriesArray.map(brewery => <Brewery key={brewery.id} brewery={brewery} onButtonClick={this.props.onButtonClick} />)} 
        </div>
      )
    }
}