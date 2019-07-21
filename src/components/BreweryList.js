import React from 'react';
import Brewery from './Brewery';
import { Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
//import GoogleMapReact from 'google-map-react'
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/Button';
//import { withGoogleMap, GoogleMap } from 'react-google-maps';
// import Map from './components/Map.js'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 


export default class BreweryList extends React.Component {


    render() {
      return (
       // <div className="ui cards">
       <div>
            {this.props.breweriesArray.map(brewery => <Brewery key={brewery.id} brewery={brewery} onButtonClick={this.props.onButtonClick} />)}
            {/* className="ui primary button" */}
            {/* <ButtonToolbar>
                <Button variant="outline-light" onClick={this.onButtonClick}>{this.props.brewery.name}</Button>
                {this.state.showComponent ?
                  <Brewery brewery={this.props.brewery}/> :
               null
               }

</ButtonToolbar> */}
            

          {/* {this.props.brewery.name} */}
          {/* {this.props.brewery.type}
          {this.props.brewery.street}
          {this.props.brewery.city}
          {this.props.brewery.state}
          {this.props.brewery.postal_code}
          <Button variant="outline-dark" href={this.props.brewery.website_url}>Visit Page</Button>
           */}
            
            
       
            {/* <Link to="/brewery">{this.props.brewery.name}</Link> */}
            
        </div>
      )
    }
}