import { RecipeState, RecipeAction, ActionTypes } from './recipes.types'

const initialState: RecipeState = {
  recipes: [],
  isLoading: true,
  error: null,
}

export default (state: RecipeState = initialState, action: RecipeAction) => {
  switch (action.type) {
    case ActionTypes.GET_RECIPE:
      return {
        ...state,
        recipes: action.payload,
        isLoading: false,
      }
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case ActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
        isLoading: false,
      }
    default:
      return state
  }
}
