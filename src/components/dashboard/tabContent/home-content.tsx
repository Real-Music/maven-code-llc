import { RootStore } from "@/store/configure-store";
import { getData } from "@/store/home/home-slice";
import { Flex, Heading, SimpleGrid, Tabs } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activities from "../activities";
import KPIs from "../kpi";
import Performance from "../performance";

let hasLoaded = false;
function HomeContent() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootStore) => state.loading);
  const data = useSelector((state: RootStore) => state.home);
  const { kpi, activities, incomeTrend, groupTrend } = data;

  useEffect(() => {
    if (hasLoaded && !isLoading) return;
    dispatch(getData());
    hasLoaded = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs.Content value="home">
      <Flex gap={6} flexDir="column">
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
