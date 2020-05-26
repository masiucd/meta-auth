import { createSelector } from 'reselect'
import { AppState } from '..'
import { RecipeState } from './recipes.types'

const recipeState = (state: AppState) => state.recipes

export const selectRecipes = createSelector(
  [recipeState],
  (recipe: RecipeState) => recipe.recipes,
)
