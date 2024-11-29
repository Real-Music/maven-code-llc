import { Box, Container } from "@chakra-ui/react";
import EmptyContent from "./tabContent/empty-content";
import HomeContent from "./tabContent/home-content";

function TabContent({ page }: { page: string }) {
  return (
    <Box h="calc(100dvh - (78px + 41px))" overflow="auto">
      <Container p={4}>
        {page === "home" ? <HomeContent /> : <EmptyContent value={page} />}
      </Container>
    </Box>
  );
}

export default TabContent;
