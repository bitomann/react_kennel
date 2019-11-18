import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./aow bito.jpg')} alt="AOW Bito" />
          </picture>
          <h3>Name: <span className="card-employee">Bito</span></h3>
          {/* <p>Position: Tight End</p> */}
        </div>
      </div>
    );
  }
}

export default OwnerCard;