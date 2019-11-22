import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
// import AnimalCard from './animal/AnimalCard'
// import LocationCard from './Location/LocationCard'
// import EmployeeCard from './Employee/EmployeeCard'
// import OwnerCard from './Owner/OwnerCard'
import AnimalList from './animal/AnimalList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './Owner/OwnerList'
import LocationList from './Location/LocationList'
import AnimalDetail from '../components/animal/AnimalDetail'
import LocationDetail from '../components/Location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
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
        <Route path="/animals/new" render={(props) => {
    return <AnimalForm {...props} />
}} />
      <Route
  path="/animals/:animalId(\d+)/edit" render={props => {
    return <AnimalEditForm {...props} />
  }}
/>
        <Route exact path="/animals" render={props => {
    if (this.isAuthenticated()) {
        return <AnimalList {...props} />
    } else {
        return <Redirect to="/login" />
    }
}} />
<Route exact path="/animals/:animalId(\d+)" render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
  return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
  {...props}/>
}} />

{/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
<Route path="/locations/new" render={(props) => {
    return <LocationForm {...props} />
}} />
      <Route
  path="/locations/:locationId(\d+)/edit" render={props => {
    return <LocationEditForm {...props} />
  }}
/>
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
        <Route path="/employee" render={(props) => {
          return <EmployeeList />
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