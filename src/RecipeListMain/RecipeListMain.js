import React from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from '../Recipe/RecipeCard'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

import ApiContext from '../ApiContext'

export default class RecipeListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  render() {
    const { recipes=[] } = this.context
    return (
      <section className='RecipeList'>
        <Hero hero='defaultHero'>
          <Banner title='recipes are my jam'>
            <Link to='./add-recipe' className='btn-primary'>add recipes</Link>
          </Banner>
        </Hero>
        
        <ul>
          {recipes.map(recipe =>
            <li key={recipe.id}>
              <RecipeCard
                id={recipe.id}
                name={recipe.name}
                main_protein={recipe.main_protein}
                created={recipe.created}
                onDeleteRecipe={this.handleDeleteRecipe}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }
}
