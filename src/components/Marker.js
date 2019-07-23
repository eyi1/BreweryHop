import React from 'react';
import './Marker.css';

const Marker = (props) => {
    return (
      <div className="marker"
        style={{ backgroundColor: props.color}}
      />
    );
  };

export default Marker;