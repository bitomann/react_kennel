import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager'

    class EmployeeList extends Component {
        state = {
            employees: [],
        }

    componentDidMount(){
        console.log("EMPLOYEE LIST: ComponentDidMount");
        APIManager.getAll("employees")
        .then((employeesArray) => {
            this.setState({
              employees: employeesArray
            })
        })
    }

    deleteEmployee = id => {
      APIManager.delete(id)
      .then(() => {
        APIManager.getAll("employees")
        .then((newEmployees) => {
          this.setState({
              employees: newEmployees
          })
        })
      })
    }

    render(){
        console.log("employeeList: Render");
        console.log(this.state.employees);
      return(
        <>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/employees/new") }}>
            Add Employee
          </button>
        </section>
        <div className="container-cards">
          {this.state.employees.map(animal =>
            <EmployeeCard
              key={animal.id}
              employee={animal}
              deleteEmployee={this.deleteEmployee}
              {...this.props}
            />
          )}
        </div>
      </>
    )
  }
}

export default EmployeeList