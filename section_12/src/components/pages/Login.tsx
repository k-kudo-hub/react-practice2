import React, { VFC, memo, useState, ChangeEvent } from "react";
import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { Login, loading } = useAuth();
  const [userId, setUserId] = useState('');
  const onClickLogin = () => Login(userId);
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">User Management App</Heading>
        <Divider my={4} />
        <Stack spacing={6}>
          <Input placeholder="User ID" value={userId} onChange={onChangeUserId}/>
          <PrimaryButton disabled={userId === ""} onClick={onClickLogin} loading={loading}>
            Login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
