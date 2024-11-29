import { Center, Flex } from "@chakra-ui/react";
import LoginForm from "@components/login/login-form";
import ThemeController from "@components/login/theme-controller";
import Logo from "@components/ui/maven-logo";

function Login() {
  return (
    <Center>
      <Flex
        mt={10}
        gap={4}
        flexDir="column"
        flexGrow={{ base: "1", sm: "unset" }}
      >
        <Logo />
        <LoginForm />
        <ThemeController />
      </Flex>
    </Center>
  );
}
export const Component = Login;
export default Login;
