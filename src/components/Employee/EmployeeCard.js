import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./raiders.jpg')} alt="Raiders Logo" />
          </picture>
          <h3>Name: <span className="card-employee">Darren Waller</span></h3>
          <p>Position: Tight End</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;