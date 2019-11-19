import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./aow bito.jpg')} alt="AOW Bito" />
          </picture>
    <h3>Name: <span className="card-ownername">{this.props.owner.name}</span></h3>
          <p>Phone: {this.props.owner.phone}</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;