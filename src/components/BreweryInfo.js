import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
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
    if(this.state.show !== nextProps.modal){
    this.setState({show: nextProps.modal, brewery: nextProps.brewery})
    }
  }

  static defaultProps = {
    center: {
      lat: 41.8781,
      lng: -87.6298
    },
    zoom: 10
  };

  render() {

  let close = () => this.setState({ show: false});

    return (
      <div className='google-map'>
        <Modal
          show={this.state.show}//true
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
          size='l'
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{this.state.brewery.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>     
            <p>
              <i style={{ position: 'relative'}} class="location arrow icon"></i>
              {this.props.brewery.street} <br />
              {this.props.brewery.city}, <span> </span>
              {this.props.brewery.state} <span> </span>
              {this.props.brewery.postal_code}  
            </p>

            <div style={{ height: '70vh', width: '100%' }}>
              <GoogleMapReact google={this.props.google} 
                bootstrapURLKeys={{ key: "AIzaSyCbzOSFbRLTDIQ8mVJ0LEiurXh6qL_4C-o" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}           
              >
                <Marker
                  lat={this.state.brewery.latitude}
                  lng={this.state.brewery.longitude}      
                  text={this.state.brewery.name}     
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