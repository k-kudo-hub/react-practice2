import React, { VFC, memo, useEffect } from "react";
import { Wrap, WrapItem, Center, Spinner } from "@chakra-ui/react";

import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), [])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner/>
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                userName={user.username}
                fullName={user.name}
                imageUrl="https://source.unsplash.com/random/"
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  )
});
