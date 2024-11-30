import { Alert } from "@/components/ui/alert";
import homeData, { GroupTrend, IncomeTrend } from "@/data/home-data";
import isEmpty from "@/utils/is-empty";
import styles from "@/utils/styles";
import { Card, Flex, Heading, Skeleton, VStack } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";

interface Props {
  isLoading?: boolean;
  data: { incomeTrend: IncomeTrend; groupTrend: GroupTrend };
}

function Performance({ data, isLoading }: Props) {
  const { groupTrend, incomeTrend } = homeData;
  const { onload, onloadFast } = styles.animate;

  const loading = isLoading || isEmpty(data.groupTrend);
  const payload = isEmpty(data.groupTrend) ? { groupTrend, incomeTrend } : data;

  return (
    <VStack gap={6}>
      <Alert
        status="info"
        h="fit-content"
        className={onload}
        title="Read our documentation with code samples"
      />

      <Flex
        gap={6}
        w="100%"
        flex={1}
        flexDir={{ base: "column", md: "row" }}
        minH={{ base: 330 * 2, md: 330, lg: "fit-content" }}
      >
        <Skeleton loading={loading} flex={1}>
          <Card.Root h="100%" className={onload}>
            <Heading
              p="8px 16px"
              fontWeight={400}
              color="fg.muted"
              borderBottomWidth={1}
            >
              Chart title
            </Heading>
            <Flex h="100%" alignItems="center" justifyContent="center">
              <ReactApexChart
                type="donut"
                width="80%"
                height="80%"
                series={Object.values(payload.incomeTrend)}
                options={{
                  stroke: { width: 2 },
                  legend: { show: false },
                  labels: Object.keys(payload.incomeTrend),
                }}
              />
            </Flex>
          </Card.Root>
        </Skeleton>

        <Skeleton loading={loading} flex={1}>
          <Card.Root h="100%" className={onloadFast}>
            <Heading
              p="8px 16px"
              fontWeight={400}
              color="fg.muted"
              borderBottomWidth={1}
            >
              Chart title
            </Heading>
            <Flex h="100%" alignItems="center" justifyContent="center">
              <ReactApexChart
                type="pie"
                width="80%"
                height="80%"
                series={Object.values(payload.groupTrend)}
                options={{
                  stroke: { width: 2 },
                  legend: { show: false },
                  labels: Object.keys(payload.groupTrend),
                }}
              />
            </Flex>
          </Card.Root>
        </Skeleton>
      </Flex>
    </VStack>
  );
}

export default Performance;
