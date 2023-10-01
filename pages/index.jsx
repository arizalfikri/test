import { useToast } from "@/hooks/toast";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.BASE_URL + "/auth/login", dataForm)
      .then((response) => {
        console.log(response);
        useToast("success login", "success");
        localStorage.setItem("token", response.data.token);
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error, "error");
        useToast("error login", "error");
      });
  };
  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) router.push("/dashboard");
  }, []);

  return (
    <Box
      minH={"100vh"}
      w={"full"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgImg={[
        "url('/img/Background_Mobile.png')",
        "url('/img/Background_Tablet.png')",
        "url('/img/Background_Desktop.png')",
      ]}
      bgSize={"cover"}
      bgPos={"center"}
    >
      <Box
        rounded={"10px"}
        shadow={"md"}
        p={"25px"}
        w={["339px", "467px"]}
        pb={"27px"}
        bg={"white"}
      >
        <Box textAlign={"center"}>
          <Text fontSize={"27px"} fontWeight={"semibold"}>
            Login
          </Text>
          <Text color={"body"} fontSize={"15px"}>
            Welcome back, enter your credentials to continue.
          </Text>
        </Box>

        <Box mt={"24px"}>
          <form action="" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel fontWeight={"semibold"} fontSize={"14px"}>
                Email
              </FormLabel>
              <Input
                placeholder="Enter email"
                type="email"
                bg={"#EFEFEF"}
                fontSize={"14px"}
                name="email"
                value={dataForm.email}
                onChange={handleChange}
              />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl mt={"18px"}>
              <FormLabel fontWeight={"semibold"} fontSize={"14px"}>
                Password
              </FormLabel>
              <Input
                placeholder="Enter Password"
                type="password"
                bg={"#EFEFEF"}
                fontSize={"14px"}
                name="password"
                value={dataForm.password}
                onChange={handleChange}
              />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <Checkbox mt={"16px"} fontWeight={"semibold"}>
              Remember me
            </Checkbox>

            <Button
              mt={"24px"}
              w={"full"}
              rounded={"7px"}
              py={1}
              bg={"primary"}
              color={"white"}
              fontWeight={"normal"}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
