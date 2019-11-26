import React, { Component } from 'react'
import AnimalCard from './AnimalCard'
import APIManager from '../../modules/APIManager'

    class AnimalList extends Component {
        //define what this component needs to render
        state = {
            animals: [],
        }

    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        APIManager.getAll("animals")
        .then((animalsArray) => {
            this.setState({
                animals: animalsArray
            })
        })
    }

    deleteAnimal = id => {
      APIManager.delete(id)
      .then(() => {
        APIManager.getAll()
        .then((newAnimals) => {
          this.setState({
              animals: newAnimals
          })
        })
      })
    }

    render(){
      console.log("AnimalList: Render");
      console.log(this.state.animals);
    
      return(
        <>
        <section className="section-content">
            <button type="button" className="btn"
      onClick={() => {this.props.history.push("/animals/new")}}>
      Admit Animal
  </button>
</section>
        <div className="container-cards">
          {this.state.animals.map(animal =>
            <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={this.deleteAnimal}
              {...this.props}
            />
          )}
        </div>
        </>
      )
    }
}

export default AnimalList