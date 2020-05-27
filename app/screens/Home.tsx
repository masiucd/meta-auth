/* eslint-disable react/prop-types */
import * as React from 'react'
import { AppState } from '../../redux'
import { useSelector } from 'react-redux'
import { images } from '../../utils/data'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from 'styled-components/native'
import Menu from '../components/Menu'
import BgCarousel from '../components/BackgroundCarousell'
import {
  Title,
  ColLeft,
  ColRight,
  Image,
  ColText,
  ColumnWrapper,
} from '../components/styled/Common'

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

interface Props {
  route: HomeScreenRouteProp
  navigation: HomeScreenNavigationProp
}

const StyledContainer = styled.View`
  flex: 1;
`

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {
  const isOpen = useSelector((state: AppState) => state.menu.hidden)

  return (
    <>
      <StyledContainer>
        {isOpen && <Menu onNavigation={navigation} />}
        <BgCarousel images={images} />
        <Title>Cookie Bookie</Title>
        <ColumnWrapper>
          <ColLeft onPress={() => navigation.navigate('Products')}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1248&q=80',
              }}
            />
            <ColText>Latest</ColText>
          </ColLeft>
          <ColRight onPress={() => navigation.navigate('Store')}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              }}
            />
            <ColText>Blog</ColText>
          </ColRight>
        </ColumnWrapper>
      </StyledContainer>
    </>
  )
}
export default HomeScreen
