import React, { VFC, memo, useEffect, useCallback } from "react";
import { Wrap, WrapItem, Center, Spinner, useDisclosure } from "@chakra-ui/react";

import { UserCard } from '../organisms/user/UserCard';
import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { useAllUsers } from '../../hooks/useAllUsers';
import { useSelectUser } from '../../hooks/useSelectUser';
import { useLoginUser } from '../../hooks/useLoginUser';

export const UserManagement: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [onOpen, onSelectUser, users]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner/>
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                userName={user.username}
                fullName={user.name}
                imageUrl="https://source.unsplash.com/random/"
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
      />
    </>
  )
});
