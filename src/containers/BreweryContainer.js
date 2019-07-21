import React from 'react';
import axios from 'axios';
import BreweryList from '../components/BreweryList';
const API_URL = 'https://api.openbrewerydb.org/breweries?by_city=Brooklyn';


export default class BreweryContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            breweries: [],
            showComponent: false
          }
        
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick = (brewery) => {
      console.log(brewery)
      this.setState({
        showComponent: true,
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
        return(

            <div>
              <BreweryList 
                breweriesArray={this.state.breweries} 
                onButtonClick={this.onButtonClick}            
              />
              {/* {this.state.breweries.map(brewery => <BreweryList key={brewery.id} brewery={brewery} />)} */}
            </div>
        )
    }


}