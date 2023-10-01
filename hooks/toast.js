import { createStandaloneToast } from "@chakra-ui/react";
const { toast } = createStandaloneToast();

export const useToast = (title, status) => {
  toast({
    title: title,
    status: status,
    position: "top-right",
    isClosable: true,
  });
};
