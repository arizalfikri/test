import MainLayout from "@/layouts/main_layout";
import {
  Box,
  HStack,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function Sales() {
  const head = [
    "Products name",
    "Categories",
    "Amount",
    "Items Sold",
    "Price",
    "Sales",
  ];
  const body = [
    {
      img: "/img/img-1.png",
      name: "Nighthawk R7800",
      category: "technology",
      amount: "27",
      sold: "3",
      price: "4,850,000",
      sales: "14,550,000",
    },
    {
      img: "/img/img-2.png",
      name: "WN821N",
      category: "technology",
      amount: "45",
      sold: "22",
      price: "565,000",
      sales: "12,430,000",
    },
    {
      img: "/img/img-3.png",
      name: "R6330 Netgear",
      category: "technology",
      amount: "20",
      sold: "6",
      price: "3,215,000",
      sales: "19,290,000",
    },
    {
      img: "/img/img-4.png",
      name: "Webcam C310",
      category: "technology",
      amount: "52",
      sold: "10",
      price: "399,000",
      sales: "3,990,000",
    },
    {
      img: "/img/img-5.png",
      name: "Arlo Pro 4",
      category: "technology",
      amount: "2",
      sold: "4",
      price: "6,550,000",
      sales: "26,200,000",
    },
  ];

  return (
    <MainLayout>
      <Box>
        <Text fontSize={"22px"} fontWeight={"semibold"}>
          Sales
        </Text>
        <Text color={"default-text"} fontSize={"15px"}>
          June 2022
        </Text>

        <TableContainer
          mt={"20px"}
          shadow={"0px 10px 13px 0px #9D9FA70D"}
          bg={"white"}
        >
          <Table variant="simple" fontSize={"13px"}>
            <Thead bg={"#F9F9FC"}>
              <Tr>
                {head.map((e, i) => (
                  <Td key={i}>{e}</Td>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {body.map((e, i) => (
                <Tr key={i}>
                  <Td>
                    <HStack pr={2}>
                      <Img src={e.img} h={12} w={12} />
                      <Text>{e.name}</Text>
                    </HStack>
                  </Td>
                  <Td textTransform={"uppercase"}>
                    <Text
                      py={1}
                      px={2}
                      rounded={"5px"}
                      bg={"#7AB6FD42"}
                      color={"#195CA8"}
                      w={"fit-content"}
                    >
                      {e.category}
                    </Text>
                  </Td>
                  <Td>{e.amount + " in stock"}</Td>
                  <Td>{e.sold}</Td>
                  <Td>{"Rp. " + e.price}</Td>
                  <Td>{"Rp. " + e.sales}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </MainLayout>
  );
}
