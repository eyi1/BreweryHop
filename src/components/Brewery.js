import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';

export default class Brewery extends React.Component{

    render(){
        return( 
          <div>
            <Button variant="outline-dark" onClick={() => this.props.onButtonClick(this.props.brewery)}>{this.props.brewery.name}</Button>
           
          {this.props.brewery.type}
          {this.props.brewery.street}
          {this.props.brewery.city}
          {this.props.brewery.state}
          {this.props.brewery.postal_code} 
          <Button variant="outline-dark" href={this.props.brewery.website_url}>Visit Page</Button>
          </div>

        )   
    }
}
