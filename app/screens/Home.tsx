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
import Overlay from '../components/styled/Overlay'

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
            <Image source={require('../cookie_imgs/white.png')} />
            <ColText>Products</ColText>
            <Overlay />
          </ColLeft>
          <ColRight onPress={() => navigation.navigate('About')}>
            <Image source={require('../cookie_imgs/ch.png')} />
            <ColText>About</ColText>
            <Overlay />
          </ColRight>
        </ColumnWrapper>
      </StyledContainer>
    </>
  )
}
export default HomeScreen
