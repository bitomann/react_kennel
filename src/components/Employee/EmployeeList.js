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

    render(){
        console.log("employeeList: Render");
      
        return(
          <div className="container-cards">
            {this.state.employees.map(employee =>
              <EmployeeCard key={employee.id} employee={employee} />
            )}
          </div>
        )
      }
}

export default EmployeeList