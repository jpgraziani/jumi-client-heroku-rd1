import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ApiContext from '../ApiContext'
import { findRecipe } from '../recipe-helpers'
import './RecipePageMain.css'

export default class RecipePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext


  render() {
    const { recipes=[] } = this.context
    const { recipeId } = this.props.match.params
    const recipe = findRecipe(recipes, recipeId) || { content: '' }
    return (
      <>
        <Hero hero='defaultHero'>
          <Banner title={`${recipe.name}`}>
            <Link to='/recipes' className='btn-primary'>
              back to recipes
            </Link>
          </Banner>
        </Hero>
        <section className='single-recipe'>
          <div className='single-recipe-info'>
            <article className='desc'>
              <h3>ingredients</h3>
              <hr />
              {recipe.ingredients}
            </article>
          <article className='desc'>
            <h3>directions</h3>
            <hr />
              {recipe.directions}
            </article>
            <article className='desc health-hr'>
              <h3>health benefits</h3>
              <hr />
              <article className='health-info'>
                <div>
                  <h6>calories</h6>
                  {recipe.calories}
                </div>
                <hr className='hrVertical' />
                <div>
                  <h6>protein</h6>
                  {recipe.protein}
                </div>
              </article>
              <hr className='hrThin' />
            </article>
          </div>
        </section>
      </>
    )
  }
}
