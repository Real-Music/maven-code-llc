import {
  StatDownTrend,
  StatLabel,
  StatRoot,
  StatUpTrend,
  StatValueText,
} from "@/components/ui/stat";
import abbreviateNumber from "@/utils/abbreviateNumber";
import {
  Box,
  Card,
  Flex,
  For,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { LuChevronUp } from "react-icons/lu";

type kpi = { title: string; value: number; trend: number; currency?: string };
interface Props {
  data: kpi[];
  isLoading?: boolean;
}

function KPIs({ data, isLoading }: Props) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 6 }} gap={6}>
      <For each={data}>
        {({ title, value, trend, currency }) => (
          <Skeleton loading={isLoading}>
            <Card.Root>
              <Card.Body pr={4} pl={4} pt={4}>
                <StatRoot textAlign="center">
                  <Flex justifyContent="flex-end">
                    {trend >= 0 ? (
                      <StatUpTrend variant="plain">
                        <Text>+{trend}%</Text>
                        <LuChevronUp />
                      </StatUpTrend>
                    ) : (
                      <StatDownTrend variant="plain">
                        <Text>{trend}%</Text>
                        <LuChevronUp />
                      </StatDownTrend>
                    )}
                  </Flex>
                  <Box textAlign="center">
                    <StatValueText>
                      {currency}
                      {abbreviateNumber(value)}
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
