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

    render(){
        console.log("locationList: Render");
      
        return(
          <div className="container-cards">
            {this.state.locations.map(location =>
              <LocationCard key={location.id} location={location} />
            )}
          </div>
        )
      }
}

export default LocationList