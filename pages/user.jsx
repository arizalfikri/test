import Pagination from "@/components/pagination";
import { useToast } from "@/hooks/toast";
import MainLayout from "@/layouts/main_layout";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import { IoIosAdd } from "react-icons/io";

export default function User() {
  const [users, setUsers] = useState([]);
  const department = ["marketing", "information technology"];
  const img = [
    "/avatars/Avatar1.png",
    "/avatars/Avatar2.png",
    "/avatars/Avatar3.png",
    "/avatars/Avatar4.png",
    "/avatars/Avatar5.png",
  ];
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActive, setIsActive] = useState(false);
  const [dataForm, setDataForm] = useState({
    email: "",
    employee: "",
    password: "",
    confirm_password: "",
    departement: "",
  });
  const head = ["employee", "email", "department", "status", "action"];

  const handleChangeActive = (e) => {
    setIsActive(!isActive);
  };
  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleRefetch = () => {
    axios
      .get(process.env.BASE_URL + `user/?page=${page}&page_size=5`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.results);
      })
      .catch((error) => console.log(error, "error"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        process.env.BASE_URL + "user",
        {
          ...dataForm,
          is_active: isActive,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ` + localStorage.getItem("token"),
            withCredentials: true,
            mode: "no-cors",
          },
        }
      )
      .then((response) => console.log(response, "response"))
      .catch((error) => console.log(error, "error"));
  };

  const handleDelete = (id) => {
    axios(process.env.BASE_URL + `user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(() => {
        handleRefetch();
        useToast("success delete", "success");
      })
      .catch((error) => useToast("error delete", "error"));
  };

  useEffect(() => {
    axios
      .get(process.env.BASE_URL + `user/?page=1&page_size=5`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response, "response");
        setTotal(response.data.count);
        setUsers(response.data.results);
        setPageSize(response.data.page_size);
      })
      .catch((error) => console.log(error, "error"));
  }, []);
  useEffect(() => {
    handleRefetch();
  }, [page]);

  return (
    <MainLayout>
      <Box>
        <Grid
          alignItems={"center"}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={3}
        >
          <GridItem colSpan={1}>
            <Text fontSize={"22px"} fontWeight={"semibold"}>
              User Management
            </Text>
            <Text color={"default-text"} fontSize={"15px"}>
              User
            </Text>
          </GridItem>
          <GridItem colSpan={1}>
            <HStack w={"full"}>
              <form style={{ width: "100%" }}>
                <Box w={"full"} pos={"relative"}>
                  <Input w={"full"} bg={"white"} placeholder="Search name" />

                  <Box
                    pos={"absolute"}
                    top={0}
                    h={"full"}
                    display={"flex"}
                    alignItems={"center"}
                    right={2}
                  >
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6539 18.0239L13.328 12.698C14.1545 11.6296 14.6016 10.3232 14.6016 8.94922C14.6016 7.30449 13.9597 5.7623 12.7989 4.59951C11.6382 3.43672 10.0919 2.79688 8.44922 2.79688C6.80654 2.79688 5.26025 3.43877 4.09951 4.59951C2.93672 5.76025 2.29688 7.30449 2.29688 8.94922C2.29688 10.5919 2.93877 12.1382 4.09951 13.2989C5.26025 14.4617 6.80449 15.1016 8.44922 15.1016C9.82324 15.1016 11.1275 14.6545 12.196 13.8301L17.5219 19.1539C17.5375 19.1695 17.556 19.1819 17.5764 19.1904C17.5969 19.1988 17.6187 19.2032 17.6408 19.2032C17.6629 19.2032 17.6848 19.1988 17.7052 19.1904C17.7256 19.1819 17.7441 19.1695 17.7598 19.1539L18.6539 18.2618C18.6695 18.2462 18.6819 18.2277 18.6904 18.2072C18.6988 18.1868 18.7032 18.165 18.7032 18.1429C18.7032 18.1208 18.6988 18.0989 18.6904 18.0785C18.6819 18.0581 18.6695 18.0395 18.6539 18.0239ZM11.6977 12.1977C10.8281 13.0651 9.67559 13.543 8.44922 13.543C7.22285 13.543 6.07031 13.0651 5.20078 12.1977C4.3333 11.3281 3.85547 10.1756 3.85547 8.94922C3.85547 7.72285 4.3333 6.56826 5.20078 5.70078C6.07031 4.8333 7.22285 4.35547 8.44922 4.35547C9.67559 4.35547 10.8302 4.83125 11.6977 5.70078C12.5651 6.57031 13.043 7.72285 13.043 8.94922C13.043 10.1756 12.5651 11.3302 11.6977 12.1977Z"
                        fill="#03050B"
                      />
                    </svg>
                  </Box>
                </Box>
              </form>

              <Button
                leftIcon={<IoIosAdd size={20} />}
                bg={"primary"}
                px={5}
                color={"white"}
                _hover={{
                  bg: "primary",
                }}
                onClick={onOpen}
              >
                Create User
              </Button>
            </HStack>
          </GridItem>
        </Grid>

        <TableContainer
          mt={"20px"}
          shadow={"0px 10px 13px 0px #9D9FA70D"}
          bg={"white"}
        >
          <Table variant="simple" fontSize={"13px"}>
            <Thead bg={"#F9F9FC"}>
              <Tr textTransform={"capitalize"}>
                {head.map((e, i) => (
                  <Td key={i}>{e}</Td>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {users.map((e, i) => (
                <Tr key={i}>
                  <Td>
                    <HStack pr={2}>
                      <Img
                        src={img[Math.floor(Math.random() * img.length)]}
                        w={12}
                        h={12}
                      />
                      <Text>{e.employee}</Text>
                    </HStack>
                  </Td>
                  <Td>{e.email}</Td>
                  <Td textTransform={"capitalize"}>
                    {department[Math.floor(Math.random() * department.length)]}
                  </Td>
                  <Td textTransform={"uppercase"}>
                    {e.is_active ? (
                      <Text
                        bg={"#99EFCB42"}
                        color={"primary"}
                        p={2}
                        w={"fit-content"}
                        rounded={"5px"}
                      >
                        active
                      </Text>
                    ) : (
                      <Text
                        bg={"#EBE9EA"}
                        color={"#929091"}
                        p={2}
                        w={"fit-content"}
                        rounded={"5px"}
                      >
                        inactive
                      </Text>
                    )}
                  </Td>
                  <Td>
                    <HStack>
                      <Box
                        p={1.5}
                        bg={"#2B2D2F"}
                        color={"white"}
                        rounded={"6px"}
                        onClick={() => {
                          setIsActive(e.is_active);
                          setDataForm(e);
                          onOpen();
                        }}
                      >
                        <AiOutlineEdit size={20} />
                      </Box>
                      <Box
                        p={1.5}
                        bg={"danger"}
                        color={"white"}
                        rounded={"6px"}
                        onClick={() => handleDelete(e.id)}
                      >
                        <AiOutlineDelete size={20} />
                      </Box>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Flex justify={["center", "space-between"]} mt={"25px"}>
          <Text
            color={"body"}
            display={["none", "block"]}
            fontSize={"14px"}
          >{`Ditampilkan ${page * 5 - 4} ke ${page * 5} dari ${total}`}</Text>

          <Pagination page={page} setPage={setPage} total={pageSize} />
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form action="" onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="email"
                    type="email"
                    name="email"
                    value={dataForm.email}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Name employee</FormLabel>
                  <Input
                    placeholder="name employee"
                    name="employee"
                    type="text"
                    value={dataForm.employee}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    placeholder="password"
                    name="password"
                    type="password"
                    value={dataForm.password}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Confirm password</FormLabel>
                  <Input
                    placeholder="confirm password"
                    name="confirm_password"
                    type="password"
                    value={dataForm.confirm_password}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Active</FormLabel>
                  <Switch
                    size={"sm"}
                    name="is_active"
                    onChange={handleChangeActive}
                    isChecked={isActive}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Departement</FormLabel>
                  <Input
                    placeholder="departement"
                    name="departement"
                    type="text"
                    value={dataForm.departement}
                    onChange={handleChange}
                  />
                </FormControl>

                <HStack mt={4}>
                  <Button onClick={onClose}>cancel</Button>
                  <Button
                    bg={"primary"}
                    color={"white"}
                    _hover={{
                      bg: "primary",
                    }}
                    type="submit"
                  >
                    create
                  </Button>
                </HStack>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </MainLayout>
  );
}
