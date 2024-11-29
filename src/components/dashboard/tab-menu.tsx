import styles from "@/utils/styles";
import { Box, Container, For, Tabs, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useColorMode } from "../ui/color-mode";

interface Props {
  page: string;
  pages: { title: string; Icon: IconType }[];
}

function TabMenu({ pages, page }: Props) {
  const { colorMode } = useColorMode();

  return (
    <Box bgColor={colorMode === "light" ? "white" : "auto"}>
      <Container p={0}>
        <Tabs.List overflowX="auto" scrollbarWidth="none">
          <For each={pages}>
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
