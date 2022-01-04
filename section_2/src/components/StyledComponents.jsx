import styled from 'styled-components';

const StyledComponents = () => {
  return (
    <Container>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!</SButton>
    </Container>
  )
}

const Container = styled.div`
border: solid 2px blue;
border-radius: 20px;
padding: 8px;
display: flex;
justify-content: space-around;
align-items: center;
`

const STitle = styled.p`
margin: 0;
color: #3d84a8;
`

const SButton = styled.button`
background-color: #abedd8;
border: none;
padding: 8px;
border-radius: 20px;
&:hover {
  background-color: #75f0c9;
  cursor: pointer;
}
`

export default StyledComponents;
