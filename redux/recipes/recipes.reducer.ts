import { RecipeState, RecipeAction, ActionTypes } from './recipes.types'

const initialState: RecipeState = {
  recipes: [],
  sweets: [],
  filteredSweets: [],
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
    case ActionTypes.GET_SWEETS:
      return {
        ...state,
        sweets: action.payload,
        isLoading: false,
      }
    case ActionTypes.SEARCH_SWEET:
      return {
        ...state,
        filteredSweets: state.sweets.filter((sweet) => {
          const re = new RegExp(`${action.payload}`, 'gi')
          return sweet.name.match(re) || sweet.category.match(re)
        }),
        isLoading: false,
      }

    // case ActionTypes.GET_SWEETS_BY_CATEGORY:
    //   return {
    //     ...state,
    //     filteredSweets: state.sweets.filter(
    //       (x) => x.category === action.payload,
    //     ),
    //     isLoading: false,
    //   }

    case ActionTypes.GET_SWEETS_BY_CATEGORY_API:
      return {
        ...state,
        filteredSweets: action.payload,
        isLoading: false,
      }
    case ActionTypes.CLEAR_SEARCH_SWEET:
      return {
        ...state,
        filteredSweets: [],
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
