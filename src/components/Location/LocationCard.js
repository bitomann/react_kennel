import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-locationname">{this.props.location.name}</span></h3>
          <p>Adress: {this.props.location.address}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
          <Link to={`/locationss/${this.props.location.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;