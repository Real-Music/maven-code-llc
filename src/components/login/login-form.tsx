import { Card, Input, VStack } from "@chakra-ui/react";
import styles from "@utils/styles";
import { LuLock, LuUser } from "react-icons/lu";
import { Button } from "../ui/button";
import { Field } from "../ui/field";
import { InputGroup } from "../ui/input-group";
import { PasswordInput } from "../ui/password-input";

function LoginForm() {
  return (
    <Card.Root
      borderWidth={{ base: 0, sm: 1 }}
      className={styles.animate.onload}
      maxW={{ base: "100%", sm: "sm" }}
    >
      <Card.Header>
        <Card.Title>Login</Card.Title>
        <Card.Description>
          Fill in the form below to sign into your account.
        </Card.Description>
      </Card.Header>

      <Card.Body>
        <VStack gap="5">
          <Field colorPalette="primary" label="Username" required>
            <InputGroup w="100%" startElement={<LuUser />}>
              <Input required placeholder="Username" />
            </InputGroup>
          </Field>

          <Field colorPalette="primary" label="Password" required>
            <InputGroup w="100%" startElement={<LuLock />}>
              <PasswordInput required placeholder="Password" />
            </InputGroup>
          </Field>
        </VStack>
      </Card.Body>

      <Card.Footer>
        <Button type="submit" fontSize="md" w="100%" colorPalette="primary">
          Login
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default LoginForm;
