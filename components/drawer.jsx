import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

import { AiOutlineDashboard, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiLineChart } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

export default function DrawerComponent({ onClose, isOpen }) {
  const pathname = usePathname();
  const router = useRouter();
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const data_sidebar = [
    {
      label: "analysis",
      data_tab: [
        {
          icon: <AiOutlineDashboard size={24} />,
          title: "dashboard",
          path: "/dashboard",
        },
        {
          icon: <BiLineChart size={24} />,
          title: "sales",
          path: "/sales",
        },
      ],
    },
    {
      label: "admin access",
      data_tab: [
        {
          icon: <AiOutlineUsergroupAdd size={24} />,
          title: "user management",
          path: "user",
          dropdown: [
            {
              title: "user",
              path: "/user",
            },
          ],
        },
      ],
    },
  ];

  const handleNavigate = (path) => {
    router.push(path);
  };
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay display={["block", "block", "block", "none"]}>
        <DrawerCloseButton
          color={"white"}
          border={"1px"}
          borderColor={"whiite"}
          float={"left"}
          rounded={"full"}
        />
      </DrawerOverlay>

      <DrawerContent display={["block", "block", "block", "none"]}>
        <DrawerBody pos={"relative"}>
          {data_sidebar.map((ds, is) => (
            <Box key={is} mb={"7px"}>
              <Text
                fontSize={"15px"}
                color={"placeholder-color"}
                textTransform={"capitalize"}
                mb={"7px"}
              >
                {ds.label}
              </Text>
              {ds.data_tab.map((dt, it) => (
                <Box key={it}>
                  <Flex
                    justify={"space-between"}
                    align={"center"}
                    cursor={"pointer"}
                    mb={1}
                    bg={pathname.includes(dt.path) ? "primary" : null}
                    color={pathname.includes(dt.path) ? "white" : null}
                    _hover={{
                      bg: "primary",
                      color: "white",
                    }}
                    py={"11px"}
                    px={"13px"}
                    rounded={"3px"}
                    onClick={() =>
                      dt.dropdown
                        ? setOpenSubMenu(!openSubMenu)
                        : handleNavigate(dt.path)
                    }
                  >
                    <HStack>
                      <Box>{dt.icon}</Box>
                      <Text fontSize={"16px"} textTransform={"capitalize"}>
                        {dt.title}
                      </Text>
                    </HStack>

                    {dt.dropdown ? (
                      <Box
                        transform={
                          openSubMenu ? "rotate(90deg)" : "rotate(0deg)"
                        }
                      >
                        <IoIosArrowForward size={20} />
                      </Box>
                    ) : null}
                  </Flex>

                  {dt.dropdown && openSubMenu
                    ? dt.dropdown.map((dd, id) => (
                        <HStack
                          key={id}
                          py={"11px"}
                          px={"13px"}
                          cursor={"pointer"}
                          _hover={{
                            bg: "primary",
                            color: "white",
                          }}
                          bg={pathname === dd.path ? "primary" : null}
                          color={pathname === dd.path ? "white" : null}
                          rounded={"3px"}
                          mt={1}
                          onClick={() => handleNavigate("/user")}
                        >
                          <Text textTransform={"capitalize"}>{dd.title}</Text>
                        </HStack>
                      ))
                    : null}
                </Box>
              ))}
            </Box>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
