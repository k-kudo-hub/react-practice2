import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
      <UserIconWithName
        image={user.image}
        name={user.name}
        isAdmin={isAdmin}
      />
      <SDl>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>tel</dt>
        <dd>{user.phone}</dd>
        <dt>company</dt>
        <dd>{user.company.name}</dd>
        <dt>web</dt>
        <dd>{user.web}</dd>
      </SDl>
    </Card>
  )
}

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`
