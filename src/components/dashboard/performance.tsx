import { Alert } from "@/components/ui/alert";
import { Card, Flex, Heading, Skeleton, VStack } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";

type trend = { [key: string]: number };

interface Props {
  isLoading?: boolean;
  data: { incomeTrend: trend; groupTrend: trend };
}

function Performance({ data, isLoading }: Props) {
  return (
    <VStack gap={6}>
      <Alert
        status="info"
        h="fit-content"
        title="Read our documentation with code samples"
      />

      <Flex
        gap={6}
        w="100%"
        flex={1}
        flexDir={{ base: "column", md: "row" }}
        minH={{ base: 330 * 2, md: 330, lg: "fit-content" }}
      >
        <Skeleton loading={isLoading} flex={1}>
          <Card.Root h="100%">
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
                series={Object.values(data.incomeTrend)}
                options={{
                  stroke: { width: 2 },
                  legend: { show: false },
                  labels: Object.keys(data.incomeTrend),
                }}
              />
            </Flex>
          </Card.Root>
        </Skeleton>

        <Skeleton loading={isLoading} flex={1}>
          <Card.Root h="100%">
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
                series={Object.values(data.groupTrend)}
                options={{
                  stroke: { width: 2 },
                  legend: { show: false },
                  labels: Object.keys(data.groupTrend),
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
