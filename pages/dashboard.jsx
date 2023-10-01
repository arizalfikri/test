import BarChart from "@/components/charts/bar_chart";
import DoughnatChart from "@/components/charts/doughnat_chart";
import MainLayout from "@/layouts/main_layout";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <MainLayout>
      <Flex w={"full"} flexDir={["column", "column", "row"]} gap={5}>
        <Box
          w={["full", "full", "60%"]}
          bg={"white"}
          h={"fit-content"}
          height={["440px", "440px", "440px", "440px"]}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-between"}
          p={5}
          rounded={"md"}
          style={{
            boxShadow: "0px 10px 13px 0px #9D9FA70D",
          }}
        >
          <Text textTransform={"capitalize"} fontWeight={"semibold"}>
            card&nbsp;title
          </Text>
          <Box overflow={"auto"} w={"full"}>
            <Box w={"full"} minW={"40rem"} overflow={"auto"}>
              <BarChart />
            </Box>
          </Box>
        </Box>
        <Box
          w={["full", "full", "full", "40%"]}
          bg={"white"}
          p={5}
          rounded={"md"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-between"}
          h={["440px", "440px", "440px", "440px"]}
          style={{
            boxShadow: "0px 10px 13px 0px #9D9FA70D",
          }}
        >
          <Text textTransform={"capitalize"} fontWeight={"semibold"}>
            card&nbsp;title
          </Text>
          <Box overflow={"auto"} w={"full"}>
            <Box
              w={"full"}
              mx={"auto"}
              pos={"relative"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              h={"22rem"}
            >
              <Box
                w={"full"}
                mx={"auto"}
                maxW={"20rem"}
                zIndex={0}
                pos={"absolute"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                inset={0}
              >
                <DoughnatChart />
              </Box>

              <VStack
                mb={24}
                w={"fit-content"}
                fontWeight={"semibold"}
                zIndex={10}
              >
                <Text textTransform={"capitalize"}>total</Text>
                <Text>100</Text>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </MainLayout>
  );
}
