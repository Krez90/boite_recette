import React, { Component } from 'react'

export default class AjouterRecette extends Component {
    state = {
        nom:'',
        image:'',
        ingredients:'',
        instructions:''
    }

    handleChange = event => {
        const {name,value} = event.target
        this.setState({[name]: value})
    }
    render() {
        return (
            <div className='admin-form ajouter-recette'>
                <input value={this.state.nom} name='nom' type='text' onChange={this.handleChange} placeholder='Entrez le nom de la recette'></input>
                <input value={this.state.image} name='image' type='text' onChange={this.handleChange} placeholder={'Entrez le nom de l\'image'}></input>
                <textarea value={this.state.ingredients} name='ingredients' onChange={this.handleChange} type='text' placeholder='Entrez les ingredients'></textarea>
                <textarea value={this.state.instructions} name='instructions' onChange={this.handleChange} type='text' placeholder='Entrez les instructions'></textarea>  
            </div>
        )
    }
}
