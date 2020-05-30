/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components/native'
import { selectFilteredSweets } from '../../redux/recipes/recipes.selector'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import {
  getSweets,
  searchSweet,
  clearSearchSweet,
} from '../../redux/recipes/recipes.actions'

interface Props {
  placeHolder: string
}

const FilterInputStyled = styled.TextInput`
  padding: 1px;
  border: 2px solid ${(props) => props.theme.colors.dark};
  font-size: 16px;
  margin: 20px 0;
  height: 40px;
`

const FilterInput: React.FC<Props> = ({ placeHolder }) => {
  const [searchText, setSearchText] = React.useState<string>('')
  const dispatch = useDispatch()

  const filteredSweets = useSelector((state: AppState) =>
    selectFilteredSweets(state),
  )

  React.useEffect(() => {
    if (filteredSweets === []) {
      setSearchText('')
    }
    dispatch(getSweets())
  }, [])

  return (
    <>
      <FilterInputStyled
        placeholder={placeHolder}
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text)
          if (text !== '') {
            dispatch(searchSweet(text))
          } else {
            dispatch(clearSearchSweet())
          }
        }}
      />
    </>
  )
}
export default FilterInput
