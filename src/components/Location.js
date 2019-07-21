import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
//const AnyReactComponent = ({ text }) => <div>{ text }</div>;
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {GoogleApiWrapper} from 'google-maps-react';

export class Location extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCbzOSFbRLTDIQ8mVJ0LEiurXh6qL_4C-o")
})(Location)