import React from 'react';
import axios from 'axios';
import BreweryList from '../components/BreweryList';
import BreweryInfo from '../components/BreweryInfo'
const API_URL = 'https://api.openbrewerydb.org/breweries?by_city=Brooklyn';


export default class BreweryContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            breweries: [],
            showComponent: false,
            brewery: ''
          }
        
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick = (brewery) => {
      console.log(brewery)
      this.setState({
        showComponent: true,
        brewery: brewery
      });
    }

  componentDidMount(){
    const url = `${API_URL}`;
    axios.get(url)
      .then(response => response.data)
      .then((data) => {
        this.setState({
          breweries: data
        })
        console.log(this.state.breweries);     
      })
  }

    render(){
      console.log(this.state.brewery)

        return(

            <div>
              <BreweryList 
                breweriesArray={this.state.breweries} 
                onButtonClick={this.onButtonClick}            
              />
              
              {this.state.showComponent ?
                <BreweryInfo 
                // breweriesArray={this.state.breweries}
                brewery={this.state.brewery}
                modal={this.state.showComponent} 
                //onHide={close}
                 /> :
               null
               }
              {/* {this.state.breweries.map(brewery => <BreweryList key={brewery.id} brewery={brewery} />)} */}
            </div>
        )
    }


}