/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

interface Props {
  text: string
  on: boolean
  toggle: () => void
  product: Sweet
}

const StyledOverlay = styled.View`
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const OverlayText = styled.Text`
  font-size: 35px;
  padding: 10px;
  align-self: center;
  top: 18px;
  /* position: absolute; */
  /* left: 36%;
  top: 30%; */
  font-family: 'Chewy';
  color: #fff;
`

const Btn = styled.TouchableOpacity`
  padding: 5px 10px;
  justify-content: center;
  flex-direction: row;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 19px;
  width: 180px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.primaryLight};
  position: absolute;
  bottom: 12px;
  left: 24%;
`

const Overlay: React.FC<Props> = ({ text, on, toggle, product }) => {
  return (
    <StyledOverlay>
      {on && (
        <>
          <OverlayText>{text}</OverlayText>
          <Btn onPress={() => alert('hello')}>
            <Text style={{ color: '#fefefe', fontSize: 25 }}>{text}</Text>
          </Btn>
        </>
      )}
    </StyledOverlay>
  )
}
export default Overlay
