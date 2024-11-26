"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import appTheme from "@/utils/theme";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={appTheme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
