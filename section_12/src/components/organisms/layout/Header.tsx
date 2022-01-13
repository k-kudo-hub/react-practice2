import React, { VFC, memo } from "react";
import { Box, Button, Flex, Heading, Link, IconButton, Drawer, DrawerBody, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: VFC = memo(() => {
  const {isOpen, onClose, onOpen} = useDisclosure();
  return (
    <>
      <Flex 
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            User Manage App.
          </Heading>
        </Flex>
        <Flex 
          align="center" 
          fontSize="sm" 
          flexGrow={2} 
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>User index</Link>
          </Box>
          <Link>Setting</Link>
        </Flex>
        <IconButton 
          aria-label="menu-button"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">HOME</Button>
              <Button w="100%">User index</Button>
              <Button w="100%">Setting</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
});
