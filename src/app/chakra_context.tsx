"use client";

import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";

const ChakraContext = ({ children, ...props }: ChakraProviderProps) => {
  return <ChakraProvider {...props}>{children}</ChakraProvider>;
};

export default ChakraContext;
