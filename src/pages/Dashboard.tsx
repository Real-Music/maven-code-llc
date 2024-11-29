import { Alert } from "@/components/ui/alert";
import { Avatar } from "@/components/ui/avatar";
import {
  StatDownTrend,
  StatLabel,
  StatRoot,
  StatUpTrend,
  StatValueText,
} from "@/components/ui/stat";
import abbreviateNumber from "@/utils/abbreviateNumber";
import styles from "@/utils/styles";
import {
  Box,
  Card,
  Container,
  Flex,
  For,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Skeleton,
  Table,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import Nav from "@components/ui/layout/nav";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
  LuBox,
  LuCalendar,
  LuChevronUp,
  LuFile,
  LuFileArchive,
  LuFolder,
  LuGalleryThumbnails,
  LuHome,
  LuTrash,
} from "react-icons/lu";

const pages = [
  { title: "Home", Icon: LuHome },
  { title: "Interface", Icon: LuBox },
  { title: "Components", Icon: LuCalendar },
  { title: "Pages", Icon: LuFile },
  { title: "Forms", Icon: LuFolder },
  { title: "Gallery", Icon: LuGalleryThumbnails },
  { title: "Documentation", Icon: LuFileArchive },
];

const kpi = [
  { value: 43, title: "New Tickets", trend: 6 },
  { value: 17, title: "Closed Today", trend: -3 },
  { value: 7, title: "New Replies", trend: 9 },
  { value: 27300, title: "Followers", trend: 3 },
  { value: 95, title: "Daily earnings", trend: -2, currency: "$" },
  { value: 621, title: "Products", trend: -1 },
];

const purchases = [
  {
    id: 1,
    user: "Ronald Bradley",
    commit: "Initial commit",
    date: "May 6, 2024",
  },
  {
    id: 2,
    user: "Russell Gibson",
    commit: "Project structure",
    date: "April 11, 2024",
  },
  {
    id: 3,
    user: "Beverly Armstrong",
    commit: "Resolved error on login page",
    date: "April 23, 2024",
  },
  {
    id: 4,
    user: "John Smith",
    commit: "Added move env var",
    date: "June 25, 2024",
  },
  {
    id: 5,
    user: "Miss Sandra",
    commit: "API integrated",
    date: "July 27, 2024",
  },
];

function Dashboard() {
  const [page, setPage] = useState("home");

  return (
    <Box as="main" minH="100dvh" bgColor="#f6f7fb">
      <Box bgColor="white">
        <Container bgColor="white" p={0}>
          <Nav />
        </Container>
      </Box>

      <Tabs.Root
        h="100%"
        value={page}
        variant="line"
        defaultValue="home"
        colorPalette="primary"
        className={styles.animate.onloadFast}
        onValueChange={(e) => setPage(e.value)}
      >
        <Box bgColor="white">
          <Container p={0}>
            <Tabs.List overflowX="auto" scrollbarWidth="none">
              <For each={pages}>
                {({ title, Icon }) => (
                  <Tabs.Trigger
                    key={title}
                    minW="fit-content"
                    value={title.toLowerCase()}
                    color={title.toLowerCase() === page ? "primary" : "inherit"}
                  >
                    <Icon />
                    <Text>{title}</Text>
                  </Tabs.Trigger>
                )}
              </For>
            </Tabs.List>
          </Container>
        </Box>

        <Box h="calc(100dvh - (78px + 41px))" overflow="auto">
          <Container p={4}>
            <Tabs.Content value="home">
              <Flex gap={6} overflow="auto" flexDir="column">
                <Heading fontSize="2xl" color="fg.muted">
                  Dashboard
                </Heading>

                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 6 }} gap={6}>
                  <For each={kpi}>
                    {({ title, value, trend, currency }) => (
                      <Skeleton loading={false}>
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

                <SimpleGrid columns={2} gap={6}>
                  <Card.Root>
                    <Heading
                      p="8px 16px"
                      fontWeight={400}
                      color="fg.muted"
                      borderBottomWidth={1}
                    >
                      Development Activity
                    </Heading>

                    <Box h={150}>
                      <ReactApexChart
                        type="area"
                        width="100%"
                        height="100%"
                        series={[
                          {
                            type: "area",
                            name: "Purchases",
                            data: [
                              10, 12, 5, 43, 20, 42, 57, 100, 78, 97, 60, 67,
                              110, 200,
                            ],
                          },
                        ]}
                        options={{
                          tooltip: {
                            theme: "light",
                            x: {
                              formatter: function (value) {
                                return new Date(value).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                );
                              },
                            },
                          },
                          grid: { show: false },
                          legend: { position: "top", show: true },
                          dataLabels: { enabled: false },
                          chart: { toolbar: { show: true } },
                          stroke: { curve: "straight" },
                          xaxis: {
                            labels: { show: false },
                            type: "datetime",
                            categories: [
                              "2024-10-08",
                              "2024-10-09",
                              "2024-10-10",
                              "2024-10-11",
                              "2024-10-12",
                              "2024-10-13",
                              "2024-10-14",
                              "2024-10-15",
                              "2024-10-16",
                              "2024-10-17",
                              "2024-10-18",
                              "2024-10-19",
                              "2024-10-20",
                              "2024-10-21",
                            ],
                          },
                          yaxis: { show: false },
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
                        <For each={purchases}>
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

                  <VStack gap={6}>
                    <Alert
                      status="info"
                      h="fit-content"
                      title="Read our documentation with code samples"
                    />

                    <Flex w="100%" flex={1} gap={6}>
                      <Card.Root flex={1}>
                        <Heading
                          p="8px 16px"
                          fontWeight={400}
                          color="fg.muted"
                          borderBottomWidth={1}
                        >
                          Chart title
                        </Heading>

                        <Flex
                          h="100%"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <ReactApexChart
                            type="donut"
                            width="80%"
                            height="80%"
                            series={[234424, 546567]}
                            options={{
                              legend: { show: false },
                              labels: ["Profit", "Revenue"],
                            }}
                          />
                        </Flex>
                      </Card.Root>

                      <Card.Root flex={1}>
                        <Heading
                          p="8px 16px"
                          fontWeight={400}
                          color="fg.muted"
                          borderBottomWidth={1}
                        >
                          Chart title
                        </Heading>
                        <Flex
                          h="100%"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <ReactApexChart
                            type="pie"
                            width="80%"
                            height="80%"
                            series={[234424, 546567, 98445, 53847]}
                            options={{
                              legend: { show: false },
                              labels: [
                                "Group A",
                                "Group B",
                                "Group C",
                                "Group D",
                              ],
                            }}
                          />
                        </Flex>
                      </Card.Root>
                    </Flex>
                  </VStack>
                </SimpleGrid>
              </Flex>
            </Tabs.Content>
            <Tabs.Content value="interface">Manage your projects</Tabs.Content>
          </Container>
        </Box>
      </Tabs.Root>
    </Box>
  );
}

export const Component = Dashboard;
export default Dashboard;
