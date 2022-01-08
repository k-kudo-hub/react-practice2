import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return(
    <SHerder>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHerder>
  )
};

const SHerder = styled.header`
  background-color: brown;
  text-align: center;
  padding: 8px 0;
  a {
    color: #fff;
  }
`

const SLink = styled(Link)`
  margin: 0 8px;

`
