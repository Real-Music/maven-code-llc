import notificationData from "@/data/notification-data";
import {
  Box,
  Circle,
  defineStyle,
  Flex,
  For,
  Heading,
  IconButton,
  Separator,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Avatar } from "@components/ui/avatar";
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "@components/ui/menu";
import {
  PopoverArrow,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@components/ui/popover";
import { FaCircle } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { LuBell } from "react-icons/lu";
import { Fragment } from "react/jsx-runtime";

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});

function Notification() {
  const { menu, tabs } = notificationData;

  return (
    <PopoverRoot size="lg">
      <PopoverTrigger asChild>
        <Box pos="relative">
          <IconButton size="sm" variant="ghost" aria-label="notification">
            <LuBell />
          </IconButton>
          <Circle pos="absolute" top="3px" right="3px">
            <FaCircle size={8} color="red" />
          </Circle>
        </Box>
      </PopoverTrigger>

      <PopoverContent p={4}>
        <PopoverArrow />
        <PopoverTitle>
          <Flex gap={4} justifyContent="space-between">
            <Heading>Notifications</Heading>

            <MenuRoot positioning={{ placement: "bottom-end" }}>
              <MenuTrigger asChild>
                <IconButton
                  size="sm"
                  rounded="full"
                  variant="ghost"
                  aria-label="menu"
                >
                  <FaEllipsis />
                </IconButton>
              </MenuTrigger>

              <MenuContent zIndex={10000}>
                <For each={menu}>
                  {(item) => (
                    <MenuItem
                      cursor="pointer"
                      key={item.title}
                      value={item.title}
                      valueText={item.title}
                    >
                      <item.Icon />
                      <Box flex="1">{item.title}</Box>
                      <MenuItemCommand>{item.command}</MenuItemCommand>
                    </MenuItem>
                  )}
                </For>
              </MenuContent>
            </MenuRoot>
          </Flex>
        </PopoverTitle>
        <Text my="4" color="fg.muted">
          Manage all your notifications and messages in one place.
        </Text>

        <Tabs.Root defaultValue="all" variant="plain">
          <Tabs.List w="100%" bg="bg.muted" rounded="l3" p="1">
            <For each={tabs.triggers}>
              {({ title, Icon }) => (
                <Tabs.Trigger key={title} flex={1} value={title.toLowerCase()}>
                  <Icon />
                  <Text>{title}</Text>
                </Tabs.Trigger>
              )}
            </For>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>

          <For each={tabs.contents}>
            {({ value, body }, index) => (
              <Tabs.Content key={value} value={value.toLowerCase()}>
                <Flex gap={3} flexDir="column" cursor="pointer">
                  <For each={body}>
                    {({ name, img, text }) => (
                      <Fragment key={name}>
                        <Flex alignItems="center" gap={4}>
                          <Avatar
                            src={img}
                            name={name}
                            colorPalette="primary"
                            css={index === 1 ? ringCss : {}}
                          />
                          <VStack gap={0} alignItems="start">
                            <Heading lineHeight={1} fontSize="16px">
                              {name}
                            </Heading>
                            <Text lineHeight={1} color="fg.muted" fontSize="sm">
                              {text}
                            </Text>
                          </VStack>
                        </Flex>
                        <Separator />
                      </Fragment>
                    )}
                  </For>
                </Flex>
              </Tabs.Content>
            )}
          </For>
        </Tabs.Root>
      </PopoverContent>
    </PopoverRoot>
  );
}

export default Notification;
