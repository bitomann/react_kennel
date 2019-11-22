import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './LocationForm.css'

class LocationForm extends Component {
    state = {
        LocationName: "",
        Address: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.locationName === "" || this.state.Address === "") {
            window.alert("Please input a location name or address");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.locationName,
                breed: this.state.address,
            };

            APIManager.post("locations", location)
            .then(() => this.props.history.push("/locations"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="locationName"
                        placeholder="Location"
                        />
                        <label htmlFor="locationName">Location</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="address"
                        placeholder="address"
                        />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewLocation}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default LocationForm