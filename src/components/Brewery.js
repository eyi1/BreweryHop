import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class Brewery extends React.Component{

    render(){
        return( 
          <div>
            <Button variant="outline-dark" onClick={() => this.props.onButtonClick(this.props.brewery)}>{this.props.brewery.name}</Button>
            {/* {this.state.showComponent ?
                  <Map brewery={this.props.brewery}/> :
               null
            } */}
          
          </div>
      //     <Map google={this.props.google} zoom={14}
      //       // initialCenter={{
      //       // lat: this.props.brewery.latitude,
      //       // lng: this.props.brewery.longitude
      //     // }}
      //     >
      //       <Marker onClick={this.onMarkerClick}
          
      //       name={'current location'}
      //       />       
      //        />
   
      //      <InfoWindow onClose={this.onInfoWindowClose}>
      //         <div>
      //           {/* <h1>{this.state.selectedPlace.name}</h1> */}
      //         </div>
      //      </InfoWindow>
      //   </Map>
      // );
          //   <div className="card">
          //    <div className="content">
          //     <a className="header">
          //       {this.props.lat}
          //       {this.props.lat}
          //     </a>
          //     <div className="meta">
          //       {/* <span className="date">{this.props.brewery.address}</span> */}
          //     </div>
          //     <div className="description">
          //     </div>
          //   </div>
          // </div>
        )   
    }

}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCbzOSFbRLTDIQ8mVJ0LEiurXh6qL_4C-o")
})(Brewery)