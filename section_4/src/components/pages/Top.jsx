import styled from "styled-components";
import SecondaryButton from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };
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
