import { Button } from "@/components/ui/button";
import Notification from "@/components/ui/layout/notification";
import { Container, Flex, HStack } from "@chakra-ui/react";
import Logo from "@components/ui/maven-logo";

function Dashboard() {
  return (
    <Container>
      <Flex gap={4} as="nav" justifyContent="space-between">
        <HStack>
          <Logo />
        </HStack>

        <HStack>
          <Button colorPalette="blue" size="sm" variant="outline">
            Source code
          </Button>
          <Notification />
        </HStack>
      </Flex>
    </Container>
  );
}

export const Component = Dashboard;
export default Dashboard;
