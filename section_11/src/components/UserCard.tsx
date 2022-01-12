import React, { VFC } from "react";
import { UserProfile } from "../types/UserProfile";
import styled from "styled-components";

type Props = {
  user: UserProfile
}

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <SContainer>
      <dl>
        <dt>Name</dt>
        <dd>{user.name}</dd>
        <dt>Mail</dt>
        <dd>{user.email}</dd>
        <dt>Address</dt>
        <dd>{user.address}</dd>
      </dl>
    </SContainer>
  )
}

const SContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 16px;
  margin: 8px;
`
