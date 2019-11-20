import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

    class EmployeeList extends Component {
        state = {
            employees: [],
        }

    componentDidMount(){
        console.log("EMPLOYEE LIST: ComponentDidMount");
        EmployeeManager.getAll()
        .then((employeesArray) => {
            this.setState({
              employees: employeesArray
            })
        })
    }

    deleteEmployee = id => {
      EmployeeManager.delete(id)
      .then(() => {
        EmployeeManager.getAll()
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
          <div className="container-cards">
            {this.state.employees.map(employee =>
              <EmployeeCard key={employee.id} employee={employee}
              deleteEmployee={this.deleteEmployee} />
            )}
          </div>
        )
      }
}

export default EmployeeList