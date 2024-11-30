import { Avatar } from "@/components/ui/avatar";
import styles from "@/utils/styles";
import { uuid } from "@/utils/uuid";
import {
  Box,
  Card,
  For,
  Heading,
  HStack,
  IconButton,
  Skeleton,
  Table,
  Text,
} from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { LuTrash } from "react-icons/lu";

type trend = { [key: string]: number };
type purchases = { id: number; user: string; commit: string; date: string };

interface Props {
  isLoading?: boolean;
  data: { trend: trend; purchases: purchases[] };
}

function Activities({ isLoading, data }: Props) {
  const { onload, onloadFast } = styles.animate;

  return (
    <Skeleton loading={isLoading}>
      <Card.Root className={onload}>
        <Heading
          p="8px 16px"
          fontWeight={400}
          color="fg.muted"
          borderBottomWidth={1}
        >
          Development Activity
        </Heading>

        <Box
          h={150}
          key={isLoading ? uuid() : uuid()}
          className={[onload, onloadFast][Math.floor(Math.random() * 2)]}
        >
          <ReactApexChart
            type="area"
            width="100%"
            height="100%"
            series={[
              {
                type: "area",
                name: "Purchases",
                data: Object.values(data.trend),
              },
            ]}
            options={{
              tooltip: {
                theme: "light",
                x: {
                  formatter: function (value) {
                    return new Date(value).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    });
                  },
                },
              },
              grid: { show: false },
              yaxis: { show: false },
              stroke: { curve: "smooth" },
              dataLabels: { enabled: false },
              chart: { toolbar: { show: true } },
              legend: { position: "top", show: true },
              xaxis: {
                type: "datetime",
                labels: { show: false },
                categories: Object.keys(data.trend),
              },
            }}
          />
        </Box>

        <Table.Root size="sm" striped>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>USER</Table.ColumnHeader>
              <Table.ColumnHeader>COMMIT</Table.ColumnHeader>
              <Table.ColumnHeader>DATE</Table.ColumnHeader>
              <Table.ColumnHeader />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <For each={data.purchases}>
              {({ user, id, commit, date }) => (
                <Table.Row key={id}>
                  <Table.Cell>
                    <HStack>
                      <Avatar size="xs" name={user} />
                      <Text color="fg.muted">{user}</Text>
                    </HStack>
                  </Table.Cell>
                  <Table.Cell>
                    <Text color="fg.muted">{commit}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text color="fg.muted">{date}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <IconButton
                      size="xs"
                      variant="ghost"
                      colorPalette="secondary"
                    >
                      <LuTrash />
                    </IconButton>
                  </Table.Cell>
                </Table.Row>
              )}
            </For>
          </Table.Body>
        </Table.Root>
      </Card.Root>
    </Skeleton>
  );
}

export default Activities;
