import { Flex, Heading, SimpleGrid, Tabs } from "@chakra-ui/react";
import Activities from "../activities";
import KPIs from "../kpi";
import Performance from "../performance";
import homeData from "@/data/home-data";

function HomeContent() {
  const isLoading = false;
  const { kpi, activities, incomeTrend, groupTrend } = homeData;

  return (
    <Tabs.Content value="home">
      <Flex gap={6} overflow="auto" flexDir="column">
        <Heading fontSize="2xl" color="fg.muted">
          Dashboard
        </Heading>

        <KPIs data={kpi} isLoading={isLoading} />
        <SimpleGrid columns={{ md: 1, lg: 2 }} gap={6}>
          <Activities data={activities} isLoading={isLoading} />
          <Performance
            isLoading={isLoading}
            data={{ incomeTrend, groupTrend }}
          />
        </SimpleGrid>
      </Flex>
    </Tabs.Content>
  );
}

export default HomeContent;
