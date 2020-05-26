import { Dispatch } from 'react'
import { GetRecipeAction, SetErrorAction, ActionTypes } from './recipes.types'

type GetRecipeDispatch = GetRecipeAction | SetErrorAction

export const getRecipes = () => async (
  dispatch: Dispatch<GetRecipeDispatch>,
) => {
  try {
    const res = await fetch('http://localhost:5000/recipes')
    const data = await res.json()

    dispatch({
      type: ActionTypes.GET_RECIPE,
      payload: data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: ActionTypes.SET_ERROR,
      payload: 'oops something went wrong',
    })
  }
}
