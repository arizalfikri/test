import { Box, Flex } from "@chakra-ui/react";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

export default function Pagination({ total, setPage, page }) {
  return (
    <Flex align={"center"}>
      <Flex align={"center"} gap={2}>
        <Box>
          <BiSkipPrevious
            size={26}
            cursor={page > 1 ? "pointer" : "not-allowed"}
            onClick={() => (page > 1 ? setPage(page - 1) : null)}
          />
        </Box>

        {Array.from({
          length: total === 0 ? 1 : total - 1,
        })
          .map((el, index) => (el = index + 1))
          .slice(page > 1 ? page - 2 : 0, page + 1)
          .map((num, i) => (
            <Box
              key={i}
              rounded={"full"}
              p={2}
              w={7}
              h={7}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
              bg={page === num ? "primary" : null}
              color={page === num ? "white" : null}
              onClick={() => setPage(num)}
            >
              {num}
            </Box>
          ))}

        <Box>
          <BiSkipNext
            size={26}
            cursor={page < total ? "pointer" : "not-allowed"}
            onClick={() => (page < total - 1 ? setPage(page + 1) : null)}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
