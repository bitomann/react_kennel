import React, { Component } from 'react'

import OwnerCard from './OwnerCard'
import APIManager from '../../modules/APIManager'

    class OwnerList extends Component {
        state = {
            owners: [],
        }

    componentDidMount(){
        console.log("OWNER LIST: ComponentDidMount");
        APIManager.getAll()
        .then((ownersArray) => {
          console.log(ownersArray)
            this.setState({
                owners: ownersArray
            })
        })
    }

    deleteOwner = id => {
      APIManager.delete(id)
      .then(() => {
        APIManager.getAll()
        .then((newOwners) => {
          this.setState({
              owners: newOwners
          })
        })
      })
    }

    render(){
        console.log("ownerList: Render");
        console.log(this.state.owns);
      
        return(
          <div className="container-cards">
            {this.state.owners.map(owner =>
              <OwnerCard key={owner.id} owner={owner}
              deleteOwner={this.deleteOwner} />
            )}
          </div>
        )
      }
}

export default OwnerList