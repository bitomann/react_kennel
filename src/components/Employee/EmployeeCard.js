import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./raiders.jpg')} alt="Raiders Logo" />
          </picture>
          <h2>Name: <span className="card-employeename">{this.props.employee.name}</span></h2>
            <p>Position: {this.props.employee.position}</p>
            <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Terminate</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;