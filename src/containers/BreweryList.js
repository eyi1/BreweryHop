import React from 'react';
import axios from 'axios';
const API_URL = 'https://api.openbrewerydb.org/breweries';

export default class BreweryList extends React.Component{
state = {
    breweries = []
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
            <div></div>
        )
    }


}