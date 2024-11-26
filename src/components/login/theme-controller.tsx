import { HStack, IconButton, Text } from "@chakra-ui/react";
import { LuLanguages } from "react-icons/lu";
import ThemeSwitcher from "../ui/theme-switcher";

function ThemeController() {
  return (
    <HStack
      p={1}
      borderTopWidth={1}
      borderBottomWidth={1}
      pl={{ base: 6, sm: 0 }}
    >
      <Text fontSize="sm">Theme:</Text>
      <ThemeSwitcher size="sm" />
      <IconButton size="xs" variant="plain" colorPalette="primary">
        <LuLanguages />
      </IconButton>
    </HStack>
  );
}

export default ThemeController;
