import React from 'react';
//import Brewery from './Brewery';

export default class BreweryList extends React.Component {
  
    clickHandler = () => {

    }

    render() {
      return (
        <div className="ui cards">
            {/* {this.props.breweriesArray.map(brewery => <Brewery key={brewery.id} brewery={brewery} />)} */}
        
          {/* <button onClick={() => this.props.brewery} className="ui primary button">{this.props.brewery.name}</button> */}
          {this.props.brewery.name}
          {this.props.brewery.type}
          {this.props.brewery.street}
          {this.props.brewery.city}
          {this.props.brewery.state}
          {this.props.brewery.postal_code}
          <a href={this.props.brewery.website_url}>{this.props.brewery.website_url}</a>
        </div>
      )
    }
  }
  
  