import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import recettes from './recettes'
import Admin from './components/Admin'
import Card from './components/Card'

// firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  ajouterRecette = recette =>{
    const recettes = {...this.state.recettes}
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }
// Synchronisation avec la base de donnée au moment ou l'application se charge
componentDidMount (){
  this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
    context: this,
  state: 'recettes'
  })
}

//  Se désynchronise quand l'application de ferme ou quand la page se ferme
componentWillUnmount (){
  base.removeBinding(this.ref)
}
// ___________________________________________________________________________________
  
chargerExemple = () => this.setState({ recettes })
  render () {
    const cards = Object.keys(this.state.recettes)
    .map(key => <Card key={key} details = {this.state.recettes[key]}/>)
    return (
      <div className='box'>
        <Header pseudo = {this.state.pseudo}/>
        <div className='cards'>
          {cards}
        </div>
        <Admin
        ajouterRecette={this.state.ajouterRecette}
        chargerExemple={this.chargerExemple}/>
      </div>
    )
  }
}

export default App
