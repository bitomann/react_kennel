import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>City: <span className="card-city">Oakland</span></h3>
          <h3>State: <span className="card-state">CA</span></h3>
          <p>Position: Oakland-Alameda County Coliseum</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;