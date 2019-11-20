import React, { Component } from 'react'

import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

    class OwnerList extends Component {
        state = {
            owners: [],
        }

    componentDidMount(){
        console.log("OWNER LIST: ComponentDidMount");
        OwnerManager.getAll()
        .then((ownersArray) => {
          console.log(ownersArray)
            this.setState({
                owners: ownersArray
            })
        })
    }

    deleteOwner = id => {
      OwnerManager.delete(id)
      .then(() => {
        OwnerManager.getAll()
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