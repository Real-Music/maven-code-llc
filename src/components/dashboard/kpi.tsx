import {
  StatDownTrend,
  StatLabel,
  StatRoot,
  StatUpTrend,
  StatValueText,
} from "@/components/ui/stat";
import homeData from "@/data/home-data";
import abbreviateNumber from "@/utils/abbreviateNumber";
import isEmpty from "@/utils/is-empty";
import styles from "@/utils/styles";
import { uuid } from "@/utils/uuid";
import { Box, Card, Flex, For, SimpleGrid, Skeleton } from "@chakra-ui/react";
import CountUp from "react-countup";
import { LuChevronUp } from "react-icons/lu";

type kpi = { title: string; value: number; trend: number; currency?: string };
interface Props {
  data: kpi[];
  isLoading?: boolean;
}

function KPIs({ data, isLoading }: Props) {
  const { onload, onloadFast } = styles.animate;

  const loading = isLoading || isEmpty(data);
  const payload = isEmpty(data) ? homeData.kpi : data;

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 6 }} gap={6}>
      <For each={payload}>
        {({ title, value, trend, currency }) => (
          <Skeleton key={title} loading={loading}>
            <Card.Root
              key={loading ? uuid() : uuid()}
              className={[onload, onloadFast][Math.floor(Math.random() * 2)]}
            >
              <Card.Body pr={4} pl={4} pt={4}>
                <StatRoot textAlign="center">
                  <Flex justifyContent="flex-end">
                    {trend >= 0 ? (
                      <StatUpTrend variant="plain">
                        <CountUp
                          prefix="+"
                          suffix="%"
                          end={trend}
                          duration={4}
                          decimals={0}
                        />
                        <LuChevronUp />
                      </StatUpTrend>
                    ) : (
                      <StatDownTrend variant="plain">
                        <CountUp
                          suffix="%"
                          end={trend}
                          decimals={0}
                          duration={4}
                        />
                        <LuChevronUp />
                      </StatDownTrend>
                    )}
                  </Flex>
                  <Box textAlign="center">
                    <StatValueText>
                      <CountUp
                        end={value}
                        decimals={0}
                        prefix={currency}
                        formattingFn={(value) => abbreviateNumber(value)}
                      />
                    </StatValueText>
                    <StatLabel>{title}</StatLabel>
                  </Box>
                </StatRoot>
              </Card.Body>
            </Card.Root>
          </Skeleton>
        )}
      </For>
    </SimpleGrid>
  );
}

export default KPIs;
