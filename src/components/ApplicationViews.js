import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalCard from './animal/AnimalCard'
//only include these once they are built - previous practice exercise
import LocationCard from './Location/LocationCard'
import EmployeeCard from './Employee/EmployeeCard'
import OwnerCard from './Owner/OwnerCard'
import AnimalList from './animal/AnimalList'
import EmployeeList from './Employee/EmployeeList'
import OwnerList from './Owner/OwnerList'
import LocationList from './Location/LocationList'
import AnimalDetail from '../components/animal/AnimalDetail'
import LocationDetail from '../components/Location/LocationDetail'
import AnimalForm from './animal/AnimalForm'


class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals/new" render={(props) => {
    return <AnimalForm {...props} />
}} />
        {/* Make sure you add the `exact` attribute here */}

<Route exact path="/animals" render={(props) => {
  return <AnimalList {...props} />
}} />
<Route path="/animals/:animalId(\d+)" render={(props) => {
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
<Route exact path="/locations" render={(props) => {
  return <LocationList />
}} />
        <Route path="/locations/:locationId(\d+)"  render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} 
          {...props}/>
        }} />
        <Route path="/employee" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/owner" render={(props) => {
          return <OwnerList />
        }} />
      </>
    )
  }
}

export default ApplicationViews