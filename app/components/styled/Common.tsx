import styled from 'styled-components/native'
import { theme } from '../../../utils/theme'

const Title = styled.Text`
  color: ${theme.colors.dark};
  font-size: ${theme.size.h1};
  font-family: 'Chewy';
  position: absolute;
  top: 80px;
  left: 26%;
  text-shadow: 1px 2px ${theme.colors.primary};
`

const ColumnWrapper = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
`

const ColLeft = styled.TouchableOpacity`
  /* height: 100%; */
  flex: 1;
  width: 40%;
  margin-right: auto;
  flex-direction: column;
`
const ColRight = styled.TouchableOpacity`
  flex: 1;
  width: 40%;
  margin-left: auto;
`

const Image = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  position: relative;
  justify-content: center;
`

const ColText = styled.Text`
  font-size: 35px;
  position: absolute;
  top: 50%;
  left: 25%;
  color: ${theme.colors.primary};
  text-shadow: 1px 2px ${theme.colors.dark};
  font-family: 'Chewy';
  z-index: 3;
`

export { Title, ColumnWrapper, ColText, ColLeft, ColRight, Image }
