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

    handleSubmit = event => {
        event.preventDefault()
        const recette = {...this.state}
        this.props.ajouterRecette(recette)

    // reset
    Object.keys(recette).forEach(item => {recette[item]=''})
    this.setState({ ...recette })
    }
    

    render() {
        return (
            <div className='card'>
                <form className='admin-form ajouter-recette' onSubmit={this.handleSubmit}>
                    <input value={this.state.nom} name='nom' type='text' onChange={this.handleChange} placeholder='Entrez le nom de la recette'></input>

                    <input value={this.state.image} name='image' type='text' onChange={this.handleChange} placeholder={'Entrez le nom de l\'image'}></input>

                    <textarea value={this.state.ingredients} name='ingredients' onChange={this.handleChange} type='text' placeholder='Entrez les ingredients'></textarea>

                    <textarea value={this.state.instructions} name='instructions' onChange={this.handleChange} type='text' placeholder='Entrez les instructions'></textarea>
                    <button type='submit'>+ Ajouter une recette</button> 
                </form>
                
            </div>
        )
    }
}
