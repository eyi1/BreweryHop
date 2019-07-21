import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
//const AnyReactComponent = ({ text }) => <div>{ text }</div>;
import Modal from 'react-bootstrap/Modal'
import { Button, ButtonToolbar } from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import Location from 'components/Location'
//import GoogleMapReact from 'google-map-react';


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
    zoom: 13
  };

render() {
  console.log(this.state.brewery)
  let close = () => this.setState({ show: false});

    return (
       <div className='google-map'>
       {/* <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ "Where's Waldo?" }
          />
        </GoogleMapReact> */}

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
              {this.props.brewery.street}
              {this.props.brewery.city}
              {this.props.brewery.state}
              {this.props.brewery.postal_code}

              <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact google={this.props.google} 
            //   style={{width: '100%', height: '100%', position: 'relative'}}
            //   className="map"
            //   zoom={14}
              bootstrapURLKeys={{ key: "AIzaSyCbzOSFbRLTDIQ8mVJ0LEiurXh6qL_4C-o" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                {/* <Marker
                key={place.id}
                text={place.name}
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
              /> */}
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