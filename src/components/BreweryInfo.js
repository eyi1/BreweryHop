import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Modal from 'react-bootstrap/Modal'
import { Button, ButtonToolbar } from 'react-bootstrap';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//const Marker = ({ text }) => <div>{text}</div>;
import Marker from './Marker'

export default class BreweryInfo extends Component {
  constructor(props){
    super(props)
    this.state={
      show: props.modal,
      brewery: props.brewery
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.state.show !== nextProps.modal){ //false vs true
      // console.log(this.state.show)
      // console.log(nextProps.modal)
    this.setState({show: nextProps.modal, brewery: nextProps.brewery})
    //debugger
  }
}


static defaultProps = {
    center: {
      lat: 40.678178,
      lng: -73.944158
    },
    zoom: 11
  };

render() {
  console.log(this.state.brewery.latitude)
  let close = () => this.setState({ show: false});

    return (
       <div className='google-map'>

            <Modal
              show={this.state.show}//true
              onHide={close}
              container={this}
              aria-labelledby="contained-modal-title"
              size='xl'
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">{this.state.brewery.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>     
              {this.state.brewery.street}
              {this.state.brewery.city}
              {this.state.brewery.state}
              {this.state.brewery.postal_code}

              <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact google={this.props.google} 
                bootstrapURLKeys={{ key: "AIzaSyCbzOSFbRLTDIQ8mVJ0LEiurXh6qL_4C-o" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            
                >
                <Marker
                // key={this.props.brewery.id}
                lat={this.state.brewery.latitude}
                lng={this.state.brewery.longitude}      
                text={this.state.brewery.name}     
                name={this.state.brewery.name} 
                color="red"   
              />
              </GoogleMapReact>
            </div>


              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-dark" onClick={close}>Close</Button>
              </Modal.Footer>
            </Modal>
      </div>
    )
  }
}

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyCbzOSFbRLTDIQ8mVJ0LEiurXh6qL_4C-o")
//   })(Location)