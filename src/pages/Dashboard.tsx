import TabContent from "@/components/dashboard/tab-content";
import TabMenu from "@/components/dashboard/tab-menu";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Tabs } from "@chakra-ui/react";
import Nav from "@components/ui/layout/nav";
import { useState } from "react";
import {
  LuBox,
  LuCalendar,
  LuFile,
  LuFileArchive,
  LuFolder,
  LuGalleryThumbnails,
  LuHome,
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
        <TabMenu page={page} pages={pages} />
        <TabContent page={page} />
      </Tabs.Root>
    </Box>
  );
}

export const Component = Dashboard;
export default Dashboard;
