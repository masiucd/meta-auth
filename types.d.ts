type RootStackParamList = {
  Home: undefined
  Products: undefined
  Recept: undefined
  Store: undefined
  Search: undefined
  RecipeInfo: { item: Sweet }
}

type MyTabsStackParamList = {
  Current: RootStackParamList
  Favorites: undefined
}

interface MenuData {
  id: string
  text: string
  path: string
}

interface Products {
  id: string
  title: string
  image: string
  path: string
}

interface Recipe {
  id: string
  title: string
  image: string
  ing1: string
  ing2: string
  ing3: string
  ing4: string
  category: string
  price: number
  description: string
  qty: number
}

// new db
interface Ingredient {
  name: string
  volume: number
  measure: string
}
interface Sweet {
  id: number // TODO: Need to be added
  name: string
  description: string
  category: string
  image: string
  price: number
  ingredients: Array<Ingredient>
  qty: number
}
