import React, { VFC, memo } from "react";
import { Flex, Box, Button, Heading, Divider, Input, Stack } from "@chakra-ui/react";

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">User Management App</Heading>
        <Divider my={4} />
        <Stack spacing={6}>
          <Input placeholder="User ID"/>
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>Login</Button>
        </Stack>
      </Box>
    </Flex>
  );
});
