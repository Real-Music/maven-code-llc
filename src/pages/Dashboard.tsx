import styles from "@/utils/styles";
import { Container, Flex, HStack } from "@chakra-ui/react";
import { Button } from "@components/ui/button";
import Notification from "@components/ui/layout/notification";
import UserProfile from "@components/ui/layout/user-profile";
import Logo from "@components/ui/maven-logo";

function Dashboard() {
  return (
    <Container>
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
    </Container>
  );
}

export const Component = Dashboard;
export default Dashboard;
