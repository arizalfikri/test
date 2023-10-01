import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  createStandaloneToast,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import axios from "axios";
import { useToast } from "@/hooks/toast";
import DrawerComponent from "@/components/drawer";

const { ToastContainer } = createStandaloneToast();

export default function MainLayout({ children }) {
  const [user, setUser] = useState({
    email: "",
    employee: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get(process.env.BASE_URL + "auth/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser({
          email: response.data.email,
          employee: response.data.employee,
        });
      })
      .catch(() => useToast("error"));
  }, []);
  return (
    <>
      <Box minH={"100vh"} pos={"relative"} bg={"canvas-color"}>
        <Header user={user} onOpen={onOpen} />

        <DrawerComponent onClose={onClose} isOpen={isOpen} />

        <Box
          w={["0", "0", "0", "20%"]}
          display={["none", "none", "none", "block"]}
          pos={"fixed"}
        >
          <Sidebar />
        </Box>
        <Flex w={"full"} justify={"end"}>
          <Box w={["full", "full", "full", "80%"]} p={"21px"}>
            {children}
          </Box>
        </Flex>
      </Box>
      <ToastContainer />
    </>
  );
}
