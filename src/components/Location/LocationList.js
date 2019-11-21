import React, { Component } from 'react'
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager'

    class LocationList extends Component {
        state = {
            locations: [],
        }

    componentDidMount(){
        console.log("LOCATION LIST: ComponentDidMount");
        APIManager.getAll("locations")
        .then((locationsArray) => {
            this.setState({
                locations: locationsArray
            })
        })
    }

    deleteLocation = id => {
      APIManager.delete(id)
      .then(() => {
        APIManager.getAll()
        .then((newLocations) => {
          this.setState({
              loctions: newLocations
          })
        })
      })
    }

    render(){
        console.log("LocationList: Render");
        console.log(this.state.locations);

        return(
          <div className="container-cards">
            {this.state.locations.map(location =>
              <LocationCard 
              key={location.id} 
              location={location}
              deleteLocation={this.deleteLocation} />
            )}
          </div>
        )
      }
}

export default LocationList