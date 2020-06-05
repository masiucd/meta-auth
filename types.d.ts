type RootStackParamList = {
  Home: undefined
  Products: undefined
  Recept: undefined
  Store: undefined
  About: undefined
  Category: { category: string | undefined }
  RecipeInfo: { item: Sweet }
}

type MyTabsStackParamList = {
  Current: RootStackParamList
  Store: undefined
}

interface MenuData {
  id: string
  text: string
  path: string
}

interface Products {
  id: string | number
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
  id: number
  name: string
  description: string
  category: string
  image: string
  price: number
  ingredients: Array<Ingredient>
  qty: number
}

interface SocialMedia {
  name: string
  text: string
  webUrl: string
  icon: string
}
