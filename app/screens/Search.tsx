import * as React from 'react'
import { Text } from 'react-native'
interface Props {}

const Search: React.FC<Props> = () => {
  const [state, setState] = React.useState([])
  React.useEffect(() => {
    fetch('http://localhost:3000/all')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setState(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Text>Search</Text>
      {state.map((x) => {
        console.log(x)
        return <Text key={x.name}>{x.productIngredientId}</Text>
      })}
    </>
  )
}
export default Search
