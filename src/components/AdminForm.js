import React from 'react'

const AdminForm = ({
    id: key,
    majRecette,
    recettes,
    supprimerRecette}) => {
    
    const recette = recettes[key]
    const handlChange = (event, key) =>{
        const {name, value} = event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key,recette)
    }
    return(
        <div className='card'>
            <form className='admin-form'>

            <input value={recette.nom} name='nom' type='text' onChange={e => handlChange(e,key)} placeholder='Entrez le nom de la recette'></input>

                <input value={recette.image} name='image' type='text' onChange={e => handlChange(e,key)} placeholder={'Entrez le nom de l\'image'}></input>

                <textarea value={recette.ingredients} name='ingredients' onChange={e => handlChange(e,key)} type='text' placeholder='Entrez les ingredients'></textarea>

                <textarea value={recette.instruction} name='instructions' onChange={e => handlChange(e,key)} type='text' placeholder='Entrez les instructions'></textarea> 

            </form>
            <button onClick = {() => supprimerRecette(key)}>Suprimer</button>
        </div>
    )
}

export default AdminForm