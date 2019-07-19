import React from 'react';
import axios from 'axios';
import BreweryList from './BreweryList';
const API_URL = 'https://api.openbrewerydb.org/breweries?by_city=Brooklyn';


export default class BreweryContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            breweries: []
          }
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
                {this.props.breweries.map(brewery => <BreweryList key={brewery.id} brewery={brewery} />)}
                {/* <ul>{this.state.breweries.map((brewery) => <li>{brewery.name}</li> )}
                </ul> */}
            </div>
        )
    }


}