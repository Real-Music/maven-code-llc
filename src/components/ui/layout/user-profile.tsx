import userMenu from "@/data/user-menu-data";
import { Flex, For, HStack, Text, VStack, Heading } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
  MenuTriggerItem,
} from "@components/ui/menu";
import { useEffect, useLayoutEffect, useState } from "react";
import { useColorMode } from "../color-mode";
import { Avatar } from "../avatar";

type themeType = "system" | "light" | "dark";

function UserProfile() {
  // TODO: Make a hook for this
  const { setColorMode } = useColorMode();
  const [theme, setTheme] = useState<themeType>("light");

  useLayoutEffect(() => setColorMode(theme), [theme, setTheme, setColorMode]);
  useEffect(() => {
    const changeTheme = () => {
      if (theme !== "system") return;
      setColorMode("system");
    };
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", changeTheme);
    return () => matchMedia.removeEventListener("change", changeTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <HStack cursor="pointer" justifyContent="center">
          <Avatar name={userMenu.name} src={userMenu.img} />
          <VStack mt={2} gap={0} display={{ base: "none", sm: "flex" }}>
            <Heading
              fontSize="16px"
              color="fg.muted"
              lineHeight={0.5}
              whiteSpace="nowrap"
            >
              {userMenu.name}
            </Heading>
            <Text fontSize="14px" color="fg.muted">
              {userMenu.role}
            </Text>
          </VStack>
        </HStack>
      </MenuTrigger>

      <MenuContent>
        <For each={userMenu.menu}>
          {({ Icon, title, menu }, index) => {
            const isLastItem = userMenu.menu.length === index + 1;
            if (menu)
              return (
                <MenuRoot
                  key={title}
                  positioning={{ placement: "right-start", gutter: 2 }}
                >
                  <MenuTriggerItem cursor="pointer" value={title.toLowerCase()}>
                    <Icon />
                    <Text flex="1">{title}</Text>
                  </MenuTriggerItem>
                  <MenuContent>
                    <MenuRadioItemGroup
                      value={theme}
                      onValueChange={(e) => setTheme(e.value as themeType)}
                    >
                      <For each={menu}>
                        {(item) => (
                          <MenuRadioItem
                            key={item.id}
                            value={item.id}
                            cursor="pointer"
                          >
                            <Flex gap={2} alignItems="center">
                              <item.Icon />
                              <Text>{item.title}</Text>
                            </Flex>
                          </MenuRadioItem>
                        )}
                      </For>
                    </MenuRadioItemGroup>
                  </MenuContent>
                </MenuRoot>
              );

            return (
              <MenuItem
                key={title}
                cursor="pointer"
                value={title.toLowerCase()}
                color={isLastItem ? "red" : ""}
              >
                <Icon />
                <Text flex="1">{title}</Text>
              </MenuItem>
            );
          }}
        </For>
      </MenuContent>
    </MenuRoot>
  );
}

export default UserProfile;
