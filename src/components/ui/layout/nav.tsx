import styles from "@/utils/styles";
import { Button, Flex, HStack } from "@chakra-ui/react";
import Logo from "../maven-logo";
import Notification from "./notification";
import UserProfile from "./user-profile";

function Nav() {
  return (
    <Flex
      p={3}
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
  );
}

export default Nav;
