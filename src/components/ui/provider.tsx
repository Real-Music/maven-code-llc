import { ChakraProvider } from "@chakra-ui/react";
import appTheme from "@utils/theme";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={appTheme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
