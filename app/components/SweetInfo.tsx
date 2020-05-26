/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components/native'

interface Props {
  item: Recipe
}
const StyledSweetInfo = styled.View``

const Image = styled.Image`
  width: 100%;
  height: 300px;
  position: relative;
`

const Button = styled.TouchableOpacity`
  padding: 10px 15px;
  margin: 40px auto;
  border: 4px solid ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  background: ${(props) => props.theme.colors.primaryLight};
`

const Title = styled.Text`
  font-size: 30px;

  text-transform: capitalize;
  padding: 15px;
`

const StyledText = styled.View`
  flex-direction: row;
  padding: 15px;
`

const Text = styled.Text`
  font-size: 18px;
  padding: 5px;
`

const Description = styled.View`
  padding: 15px;
`

const OverLayImg = styled.View`
  position: absolute;
  top: 0;
  height: 300px
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const SweetInfo: React.FC<Props> = ({ item }) => {
  const { title, image, description, ing1, ing2, ing3, ing4 } = item

  return (
    <StyledSweetInfo>
      <Image source={{ uri: image }} />
      <OverLayImg />
      <Title>RecipeInfo {title}</Title>
      <StyledText>
        <Text>ingredient1:</Text>
        <Text>{ing1}</Text>
      </StyledText>
      <StyledText>
        <Text>ingredient2 </Text>
        <Text>{ing2} </Text>
      </StyledText>
      <StyledText>
        <Text>ingredient3 </Text>
        <Text>{ing3} </Text>
      </StyledText>
      <StyledText>
        <Text>ingredient4 </Text>
        <Text>{ing4} </Text>
      </StyledText>

      <Description>
        <Text style={{ lineHeight: 26, fontSize: 14 }}>
          description {description}
        </Text>
      </Description>

      <Button onPress={() => alert('add to cart')}>
        <Text
          style={{ fontSize: 25, textTransform: 'capitalize', color: '#333' }}
        >
          Add to Cart
        </Text>
      </Button>
    </StyledSweetInfo>
  )
}
export default SweetInfo
