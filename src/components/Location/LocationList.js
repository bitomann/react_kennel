import React, { Component } from 'react'

import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

    class LocationList extends Component {
        state = {
            locations: [],
        }

    componentDidMount(){
        console.log("LOCATION LIST: ComponentDidMount");
        LocationManager.getAll()
        .then((locationArray) => {
            this.setState({
                locations: locationArray
            })
        })
    }

    deleteLocation = id => {
      LocationManager.delete(id)
      .then(() => {
        LocationManager.getAll()
        .then((newLocations) => {
          this.setState({
              loctions: newLocations
          })
        })
      })
    }

    render(){
        console.log("locationList: Render");
        console.log(this.state.locations);

        return(
          <div className="container-cards">
            {this.state.locations.map(location =>
              <LocationCard key={location.id} location={location}
              deleteLocation={this.deleteLocation} />
            )}
          </div>
        )
      }
}

export default LocationList