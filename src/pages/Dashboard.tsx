import TabContent from "@/components/dashboard/tab-content";
import TabMenu from "@/components/dashboard/tab-menu";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Tabs } from "@chakra-ui/react";
import Nav from "@components/ui/layout/nav";
import { useState } from "react";

function Dashboard() {
  const { colorMode } = useColorMode();
  const [page, setPage] = useState("home");

  return (
    <Box
      as="main"
      minH="100dvh"
      bgColor={colorMode === "light" ? "#f6f7fb" : "auto"}
    >
      <Nav />
      <Tabs.Root
        h="100%"
        lazyMount
        value={page}
        variant="line"
        defaultValue="home"
        colorPalette="primary"
        onValueChange={(e) => setPage(e.value)}
      >
        <TabMenu page={page} />
        <TabContent page={page} />
      </Tabs.Root>
    </Box>
  );
}

export const Component = Dashboard;
export default Dashboard;
