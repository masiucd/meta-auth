export interface RecipeState {
  recipes: Recipe[]
  isLoading: boolean
  error: null | string
}

export enum ActionTypes {
  GET_RECIPE = 'GET_RECIPE',
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
}

export interface GetRecipeAction {
  type: ActionTypes.GET_RECIPE
  payload: Recipe[]
}
export interface SetErrorAction {
  type: ActionTypes.SET_ERROR
  payload: string
}
export interface ClearErrorAction {
  type: ActionTypes.CLEAR_ERROR
}

export type RecipeAction = GetRecipeAction | SetErrorAction | ClearErrorAction
