import { createSelector } from 'reselect'
import { AppState } from '..'
import { RecipeState } from './recipes.types'

const recipeState = (state: AppState) => state.recipes

export const selectRecipes = createSelector(
  [recipeState],
  (recipe: RecipeState) => recipe.recipes,
)

export const selectSweets = createSelector(
  [recipeState],
  (recipe: RecipeState) => recipe.sweets,
)
export const selectFilteredSweets = createSelector(
  [recipeState],
  (recipe: RecipeState) => recipe.filteredSweets,
)
