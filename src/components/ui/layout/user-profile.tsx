import userMenu from "@/data/user-menu-data";
import { RootStore } from "@/store/configure-store";
import { setError } from "@/store/loading/loading-slice";
import { resetUser } from "@/store/user/user-slice";
import { Flex, For, Heading, HStack, Text } from "@chakra-ui/react";
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
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../avatar";
import { useColorMode } from "../color-mode";
import { resetData } from "@/store/home/home-slice";

type themeType = "system" | "light" | "dark";

function UserProfile() {
  // TODO: Make a hook for this
  const dispatch = useDispatch();
  const { setColorMode } = useColorMode();
  const [theme, setTheme] = useState<themeType>("light");
  const user = useSelector((state: RootStore) => state.user);

  const logoutUser = () => {
    dispatch(setError(null));
    dispatch(resetUser());
    dispatch(resetData());
  };

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
          <Avatar
            size="sm"
            src={user.image || userMenu.img}
            name={user.fullname || userMenu.name}
          />
          <Flex
            gap={0}
            mt="7px"
            flexDir="column"
            justifyContent="center"
            display={{ base: "none", sm: "flex" }}
          >
            <Heading
              fontSize="16px"
              color="fg.muted"
              lineHeight={0.5}
              whiteSpace="nowrap"
            >
              {user.fullname || userMenu.name}
            </Heading>
            <Text fontSize="14px" color="fg.muted">
              {user.role || userMenu.role}
            </Text>
          </Flex>
        </HStack>
      </MenuTrigger>

      <MenuContent>
        <For each={userMenu.menu}>
          {({ Icon, title, menu }, index) => {
            const isLogout = userMenu.menu.length === index + 1;
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
                color={isLogout ? "red" : ""}
                onClick={() => {
                  if (isLogout) logoutUser();
                }}
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
