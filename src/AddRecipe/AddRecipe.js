import React, { Component } from 'react'
import RecipeForm from '../RecipeForm/RecipeForm'
import ApiContext from '../ApiContext'
import config from '../config'

export default class AddRecipe extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const newRecipe = {
      name: e.target['recipe-name'].value,
      directions: e.target['recipe-content'].value,
      created: new Date(),
      ingredients: e.target['ingredients'].value,
      main_protein: e.target['main_protein'].value,
      calories: e.target['calories'].value,
      protein: e.target['protein'].value
    }
    console.log(newRecipe)
    fetch(`${config.API_ENDPOINT}/recipes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newRecipe),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
          return res.json()
      })
      .then(recipe => {
        this.context.addRecipe(recipe)
        this.props.history.push(`/recipe/${recipe.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    
    return (
      <section className='AddNote'>
        <h2>Create a recipe</h2>
        <RecipeForm onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='recipe-name-input'>
              Name
            </label>
            <input type='text' id='recipe-name-input' name='recipe-name' />
          </div>
          <div className='field'>
            <label htmlFor='ingredients'>
              ingredients
            </label>
            <textarea id='ingredients' name='ingredients' />
          </div>
          <div className='field'>
            <label htmlFor='recipe-content-input'>
              directions
            </label>
            <textarea id='recipe-content-input' name='recipe-content' />
          </div>
          <div className='field'>
            <label htmlFor='main_protein'>
            main protein
            </label>
            <input type='textr' id='main_proteins' name='main_protein' />
          </div>
          <div className='field'>
            <label htmlFor='calories'>
              calories
            </label>
            <input type='number' id='calories' name='calories' />
          </div>
          <div className='field'>
            <label htmlFor='protein'>
              protein
            </label>
            <input type='number' id='protein' name='protein' />
          </div>
          
          <div className='buttons'>
            <button type='submit'>
              Add recipe
            </button>
          </div>
        </RecipeForm>
      </section>
    )
  }
}
