import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import ReduxThunk from 'redux-thunk'
import menuReducer from './menu/menu.reducer'
import productReducer from './products/product.reducer'
import recipesReducer from './recipes/recipes.reducer'

const rootReducer = combineReducers({
  products: productReducer,
  recipes: recipesReducer,
  menu: menuReducer,
})

export type AppState = ReturnType<typeof rootReducer>

const configureStore = () => {
  const middleWare: Middleware[] = []

  middleWare.push(ReduxThunk)

  const middleWareEnhancer = applyMiddleware(...middleWare)
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  )
  return store
}

export default configureStore
