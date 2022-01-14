import React, { VFC, memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from '../organisms/user/UserCard';

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          userName="Bond"
          fullName="James Bond"
          imageUrl="https://source.unsplash.com/random/"
        />
      </WrapItem>
    </Wrap>
  )
});
