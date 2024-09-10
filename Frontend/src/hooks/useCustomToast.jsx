import { useToast } from "@chakra-ui/react";

function useCustomToast() {
  const toast = useToast();

  const successToast = (message) =>
    toast({
      // title: "Success",
      description: message,
      status: "success",
      // duration: 5000,
      isClosable: true,
      position: "top",
      containerStyle: {
        bg: "#16C888",
        borderRadius: "4px",
      },
      colorScheme: "success",
    });

  const errorToast = (message) =>
    toast({
      // title: "Error",
      description: message,
      status: "error",
      // duration: 5000,
      isClosable: true,
      position: "top",
      containerStyle: {
        bg: "#F25768",
        borderRadius: "4px",
      },
      colorScheme: "success",
    });

  const infoToast = (message) =>
    toast({
      // title: "Info",
      description: message,
      status: "info",
      // duration: 5000,
      isClosable: true,
      position: "top",
      containerStyle: {
        bg: "#F89336",
        borderRadius: "4px",
      },
      colorScheme: "success",
    });

  return { successToast, errorToast, infoToast };
}

export default useCustomToast;
