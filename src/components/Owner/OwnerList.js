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

    render(){
        console.log("ownerList: Render");
      
        return(
          <div className="container-cards">
            {this.state.owners.map(owner =>
              <OwnerCard key={owner.id} owner={owner} />
            )}
          </div>
        )
      }
}

export default OwnerList