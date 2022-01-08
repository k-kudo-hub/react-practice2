import styled from "styled-components";
import SecondaryButton from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router";

export const Top = () => {
  const navigate = useNavigate();
  const onClickAdmin = () => navigate("/users", { state: { isAdmin: true }});
  const onClickGeneral = () => navigate("/users", { state: { isAdmin: false }});
  return (
    <SContainer>
      <h2>TOP PAGE</h2>
      <SButtonContainer>
        <SecondaryButton onClick={onClickAdmin}>Administrator</SecondaryButton>
        <SecondaryButton onClick={onClickGeneral}>User</SecondaryButton>
      </SButtonContainer>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`

const SButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin: 10px auto;
`
