export interface RecipeState {
  recipes: Recipe[]
  sweets: Sweet[] // from the new database
  filteredSweets: Array<Sweet>
  isLoading: boolean
  error: null | string
}

export enum ActionTypes {
  GET_RECIPE = 'GET_RECIPE',
  GET_SWEETS = 'GET_SWEETS',
  GET_SWEETS_BY_CATEGORY = 'GET_SWEETS_BY_CATEGORY',
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
  SEARCH_SWEET = 'SEARCH_SWEET',
  CLEAR_SEARCH_SWEET = 'CLEAR_SEARCH_SWEET',
}

export interface GetRecipeAction {
  type: ActionTypes.GET_RECIPE
  payload: Recipe[]
}
export interface GetSweetAction {
  type: ActionTypes.GET_SWEETS
  payload: Sweet[]
}

export interface SetErrorAction {
  type: ActionTypes.SET_ERROR
  payload: string
}
export interface ClearErrorAction {
  type: ActionTypes.CLEAR_ERROR
}
export interface SearchSweetAction {
  type: ActionTypes.SEARCH_SWEET
  payload: string
}
export interface ClearSearchSweetAction {
  type: ActionTypes.CLEAR_SEARCH_SWEET
}
export interface GetSweetByCategoryAction {
  type: ActionTypes.GET_SWEETS_BY_CATEGORY
  payload: { sweets: Sweet[]; category: string | undefined }
}

export type RecipeAction =
  | GetRecipeAction
  | SetErrorAction
  | ClearErrorAction
  | GetSweetAction
  | SearchSweetAction
  | ClearSearchSweetAction
  | GetSweetByCategoryAction
