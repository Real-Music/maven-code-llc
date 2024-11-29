import styles from "@/utils/styles";
import { Box, Button, Container, Flex, HStack } from "@chakra-ui/react";
import Logo from "../maven-logo";
import Notification from "./notification";
import UserProfile from "./user-profile";
import { useColorMode } from "../color-mode";

function Nav() {
  const { colorMode } = useColorMode();

  return (
    <Box bgColor={colorMode === "light" ? "white" : "auto"}>
      <Container p={0}>
        <Flex
          p={4}
          gap={4}
          as="nav"
          borderBottomWidth={1}
          justifyContent="space-between"
          className={styles.animate.onload}
        >
          <HStack>
            <Logo headingProps={{ display: { base: "none", md: "block" } }} />
          </HStack>
          <HStack>
            <Button colorPalette="blue" size="xs" variant="outline">
              Source code
            </Button>
            <Notification />
            <UserProfile />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Nav;
