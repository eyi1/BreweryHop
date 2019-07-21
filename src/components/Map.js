import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
//const AnyReactComponent = ({ text }) => <div>{ text }</div>;
import Modal from 'react-bootstrap/Modal'
import { Button, ButtonToolbar } from 'react-bootstrap';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default class Map extends Component {
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


  // static defaultProps = {
  //   center: { lat: 40.7446790, lng: -73.9485420 },
  //   zoom: 11
  //}
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
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">{this.state.brewery.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>     
              {this.props.brewery.street}
              {this.props.brewery.city}
              {this.props.brewery.state}
              {this.props.brewery.postal_code}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-dark" onClick={close}>Close</Button>
              </Modal.Footer>
            </Modal>
      </div>
    )
  }
}