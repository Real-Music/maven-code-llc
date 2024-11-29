import dashboardData from "@/data/dashboard-data";
import styles from "@/utils/styles";
import { Box, Container, For, Tabs, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

function TabMenu({ page }: { page: string }) {
  const { colorMode } = useColorMode();

  return (
    <Box bgColor={colorMode === "light" ? "white" : "auto"}>
      <Container p={0}>
        <Tabs.List overflowX="auto" scrollbarWidth="none">
          <For each={dashboardData}>
            {({ title, Icon }) => (
              <Tabs.Trigger
                key={title}
                minW="fit-content"
                value={title.toLowerCase()}
                className={styles.animate.onloadFast}
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
  );
}

export default TabMenu;
