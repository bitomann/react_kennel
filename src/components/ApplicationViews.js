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
class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/location" render={(props) => {
          return <LocationList />
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