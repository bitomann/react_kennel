import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../Location/Location.css'

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-locationname">{this.props.location.name}</span></h3>
          <p>Adress: {this.props.location.address}</p>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
          <button type="button"
            onClick={() => {this.props.history.push(`/locations/${this.props.locations.id}/edit`)}}>Edit</button>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.locations.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;