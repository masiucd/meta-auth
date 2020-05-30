import * as React from 'react'
import { Text, View, Button } from 'react-native'
import { useSpring, animated } from 'react-spring'
import useToggle from '../hooks/useToggle'
import styled from 'styled-components/native'
import {
  selectFilteredSweets,
  selectSweets,
} from '../../redux/recipes/recipes.selector'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import { getSweets } from '../../redux/recipes/recipes.actions'
import FilterInput from '../components/SearchFilter'
interface Props { }

const Wrapper = animated(View)

const Search: React.FC<Props> = () => {
  const [on, toggle] = useToggle()

  const dispatch = useDispatch()
  const sweets = useSelector((state: AppState) => selectSweets(state))
  const filteredSweets = useSelector((state: AppState) =>
    selectFilteredSweets(state),
  )

  React.useEffect(() => {
    dispatch(getSweets())
  }, [])

  const props = useSpring({
    opacity: on ? 1 : 0,
  })

  return (
    <>
      <FilterInput placeHolder="apa" />

      <Button title="toggle" onPress={toggle} />
      <Wrapper style={props}>
        {filteredSweets.length > 0
          ? filteredSweets.map((x) => <Text key={x.name}>{x.name}</Text>)
          : sweets.map((x) => {
            // console.log(x)
            return <Text key={x.name}>{x.name}</Text>
          })}
      </Wrapper>
    </>
  )
}
export default Search
