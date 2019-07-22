import React from 'react';
import './Marker.css';

const Marker = (props) => {
    const { color, name } = props;
    console.log(props)
    return (
      <div className="marker"
        style={{ backgroundColor: color}}
        title={name}
      />
    );
  };

export default Marker;