import React from 'react'
import { Button } from 'react-bootstrap';
import { Card, Label } from 'semantic-ui-react'

export default class Brewery extends React.Component{

    render(){
        return( 
          <div className='ui-cards' style={{display: 'inline-block', padding: '1em', margin: '1em'}}>
            <br />
            <Card.Group>
              <Card style={{ width: '21rem' }} >
                <Card.Content>
                  <Card.Header as='a'>{this.props.brewery.name}</Card.Header>
                  <Card.Meta>
                    <i style={{ position: 'relative'}} class="bar icon"></i>
                    <span className='brewery_type'>{this.props.brewery.brewery_type}</span>
                  </Card.Meta>
                  <Card.Description>
                            {this.props.brewery.street} <br />
                            {this.props.brewery.city}, <span> </span>
                            {this.props.brewery.state} <span> </span>
                            {this.props.brewery.postal_code}  
                  </Card.Description>
                </Card.Content>
                <Card.Content>
                  <Card.Content extra>  
                    <Button variant="outline-dark" onClick={() => this.props.onButtonClick(this.props.brewery)}> 
                       <i style={{ position: 'relative'}} class="map pin icon"></i>
                          Map
                    </Button>  
                    <span> </span>  
                      <i style={{ position: 'relative'}} class="arrows alternate horizontal icon"></i>
                    <span> </span>   
                    <Button variant="outline-dark" href={this.props.brewery.website_url}>
                      <i style={{ position: 'relative'}} class="home icon"></i>
                         Visit Page
                    </Button>
                  </Card.Content>
                </Card.Content>
              </Card>
            </Card.Group>

          </div>
        )   
    }
}