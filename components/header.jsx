import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";

import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

export default function Header({ user, onOpen }) {
  return (
    <Flex
      justify={"space-between"}
      pos={"sticky"}
      top={0}
      align={"center"}
      bg={"canvas-color"}
      py={"20px"}
      px={"38px"}
      zIndex={99}
    >
      <HStack gap={5}>
        <Box
          cursor={"pointer"}
          display={["block", "block", "block", "none"]}
          onClick={onOpen}
        >
          <FiMenu size={20} />
        </Box>
        <Box cursor={"pointer"} display={["none", "none", "none", "block"]}>
          <FiMenu size={20} />
        </Box>
        <Text fontSize={"27px"} textTransform={"uppercase"} fontWeight={"700"}>
          logo
        </Text>
      </HStack>

      <HStack gap={5}>
        <Box
          rounded={"full"}
          bg={"#E3645c"}
          color={"white"}
          w={"46px"}
          h={"46px"}
          fontSize={"13px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          textTransform={"uppercase"}
        >
          {user.email.slice(0, 2)}
        </Box>

        <Box display={["none", "none", "block"]}>
          <Text fontSize={"17px"} fontWeight={"500"}>
            {user.email}
          </Text>
          <Text fontSize={"14px"} color={"body"}>
            {user.employee}
          </Text>
        </Box>

        <Box>
          <IoIosArrowDown size={26} />
        </Box>
      </HStack>
    </Flex>
  );
}
