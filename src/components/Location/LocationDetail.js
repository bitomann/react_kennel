import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './LocationDetail.css'
// import LocationDetail from './LocationDetail'
//⬆️⬆️⬆️⬆️⬆️imports components⬆️⬆️⬆️⬆️⬆️//

class LocationDetail extends Component {

    state = {
        name: "",
        address: "",
        loadingStatus: true,
    }
    handleDelete = () => {
        // invokes delete function in APIManager and re-directs to Location List//
        this.setState({loadingStatus: true})
        APIManager.delete("locations", this.props.locationID)
        .then(() => this.props.history.push("/locations"))
    }

    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount"); 
        // gets(id) from APIManager and holds data; puts it into state//
        APIManager.get("locations", this.props.locationID)
        .then((location) => {
            this.setState({
               name: location.name,
               address: location.address,
               loadingStatus: false
            });
        });
    }

    render() {
        return (
           <div className="card">
              <div className="card-content">
              <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                <p>Address: {this.state.address}</p>
                <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close</button>
              </div>
            </div>
          );
        }
}
export default LocationDetail;