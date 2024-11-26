import LoginForm from "@components/login/login-form";
import ThemeController from "@components/login/theme-controller";
import Logo from "@components/ui/maven-logo";
import { Center, Flex } from "@chakra-ui/react";

function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Center>
      <Flex
        mt={10}
        gap={4}
        as="form"
        flexDir="column"
        onSubmit={handleSubmit}
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
