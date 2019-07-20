import React from 'react'

export default class Brewery extends React.Component{

    render(){
        return( 
            <div className="card">
             <div className="content">
              <a className="header">
                {this.props.brewery.name}
              </a>
              <div className="meta">
                {/* <span className="date">{this.props.brewery.address}</span> */}
              </div>
              <div className="description">
              </div>
            </div>
          </div>
        )
        
    }

}