import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from '../components/animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeList from './Employee/EmployeeList'
import EmployeeWithAnimals from './employee/EmployeeWithAnimal'
import { throwStatement } from '@babel/types'
import OwnerList from './Owner/OwnerList'
import LocationList from './Location/LocationList'
import LocationDetail from '../components/Location/LocationDetail'
import LocationForm from './Location/LocationForm'
import LocationEditForm from './Location/LocationEditForm'
class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <>
       <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/employees" render={props => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
      <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          console.log("Props from react-router-dom", props)
          console.log("This component's props", this.props)
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            // history={props.history}
            // match={props.match}
            // location={props.location}
            {...props}
          />
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }}
        />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route exact path="/locations" render={props => {
    if (this.isAuthenticated()) {
        return <LocationList {...props} />
    } else {
        return <Redirect to="/login" />
    }
}} />
<Route exact path="/locations/:locationId(\d+)" render={(props) => {
  
  return <LocationDetail locationId={parseInt(props.match.params.locationId)}
  {...props}/>
}} />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
    return <EmployeeWithAnimals {...props} />
}} />
        <Route path="/owner" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/login" component={Login} />
      </>
    )
  }
}

export default ApplicationViews