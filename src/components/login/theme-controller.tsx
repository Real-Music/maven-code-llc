import styles from "@/utils/styles";
import { HStack, Text } from "@chakra-ui/react";
import ThemeSwitcher from "../ui/theme-switcher";

function ThemeController() {
  return (
    <HStack
      p={1}
      borderTopWidth={1}
      borderBottomWidth={1}
      pl={{ base: 6, sm: 0 }}
      className={styles.animate.onloadFast}
    >
      <Text fontSize="sm">Theme:</Text>
      <ThemeSwitcher size="sm" />
    </HStack>
  );
}

export default ThemeController;
