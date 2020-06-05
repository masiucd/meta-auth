import * as React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Entypo'

import { StackNavigationProp } from '@react-navigation/stack'

type AboutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'About'
>

interface Props {
  item: SocialMedia
  onNavigation: AboutScreenNavigationProp
}

const SocialItemStyles = styled.View`
  padding: 15px 5px;
  flex-direction: row;
  margin: 5px 0;
  align-items: center;
`

const SocialText = styled.Text`
  text-transform: capitalize;
  width: 20%;
  font-family: 'Chewy';
  font-size: 18px;
  text-shadow: 2px 2px 5px ${(props) => props.theme.colors.primary};
`

const SocialTextSecondary = styled(SocialText)`
  width: 40%;
  margin-left: auto;
`

const SocialItem: React.FC<Props> = ({ item, onNavigation }) => {
  return (
    <SocialItemStyles
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <Icon
        name={item.icon}
        size={30}
        style={{ marginLeft: 10, width: 40 }}
        onPress={() => onNavigation.navigate('WebView', { url: item.webUrl })}
      />
      <SocialText>{item.name}</SocialText>
      <SocialTextSecondary>{item.text}</SocialTextSecondary>
    </SocialItemStyles>
  )
}
export default SocialItem
