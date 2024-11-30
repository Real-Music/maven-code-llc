import userMenu from "@/data/user-menu-data";
import { RootStore } from "@/store/configure-store";
import { resetData } from "@/store/home/home-slice";
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
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../avatar";
import { useColorMode } from "../color-mode";

type themeType = "system" | "light" | "dark";

function UserProfile() {
  const dispatch = useDispatch();
  const { setColorMode, theme } = useColorMode();
  const user = useSelector((state: RootStore) => state.user);

  const logoutUser = () => {
    dispatch(setError(null));
    dispatch(resetUser());
    dispatch(resetData());
  };

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
                      value={theme as themeType}
                      onValueChange={(e) => setColorMode(e.value as themeType)}
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
