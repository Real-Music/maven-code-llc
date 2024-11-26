import { Icon } from "@chakra-ui/react";
import { Switch, SwitchProps } from "@components/ui/switch";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "./color-mode";

interface CheckedChangeDetails {
  checked: boolean;
}

function ThemeSwitcher(props: SwitchProps) {
  const { toggleColorMode, colorMode } = useColorMode();
  const [checked, setChecked] = useState(colorMode === "light");

  const handleOnCheck = (event: CheckedChangeDetails) => {
    setChecked(event.checked);
    toggleColorMode();
  };

  return (
    <Switch
      size="lg"
      checked={checked}
      colorPalette="primary"
      onCheckedChange={handleOnCheck}
      trackLabel={{ on: <SwitchOn />, off: <SwitchOff /> }}
      {...props}
    />
  );
}

const SwitchOn = () => (
  <Icon color="white">
    <FaSun />
  </Icon>
);

const SwitchOff = () => (
  <Icon color="white">
    <FaMoon />
  </Icon>
);

export default ThemeSwitcher;
