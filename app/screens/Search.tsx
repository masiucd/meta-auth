import * as React from 'react'
import { Text, View, Button } from 'react-native'
import { useSpring, animated } from 'react-spring'
import useToggle from '../hooks/useToggle'
import styled from 'styled-components/native'
interface Props {}

const Wrapper = animated(View)

const Search: React.FC<Props> = () => {
  const [state, setState] = React.useState([])
  const [on, toggle] = useToggle()
  React.useEffect(() => {
    fetch('http://localhost:3000/all')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setState(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const props = useSpring({
    opacity: on ? 1 : 0,
  })

  return (
    <>
      <Text>Search</Text>
      <Button title="toggle" onPress={toggle} />
      <Wrapper style={props}>
        {state.map((x) => {
          console.log(x)
          return <Text key={x.name}>{x.name}</Text>
        })}
      </Wrapper>
    </>
  )
}
export default Search
