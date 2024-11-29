"use client";
import { RootStore } from "@/store/configure-store";
import { loginUser } from "@/store/user-slice/user-slice";
import { Card, Input, VStack } from "@chakra-ui/react";
import styles from "@utils/styles";
import { useState } from "react";
import { LuLock, LuUser } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Field } from "../ui/field";
import { InputGroup } from "../ui/input-group";
import { PasswordInput } from "../ui/password-input";

function LoginForm() {
  const [state, setState] = useState({ username: "", password: "" });

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootStore) => state.loading);

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    dispatch(loginUser(state));
  };

  return (
    <Card.Root
      as="form"
      onSubmit={handleSubmit}
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
              <Input
                required
                name="username"
                disabled={isLoading}
                placeholder="Username"
                value={state.username}
                onChange={(e) =>
                  setState({ ...state, username: e.target.value })
                }
              />
            </InputGroup>
          </Field>

          <Field colorPalette="primary" label="Password" required>
            <InputGroup w="100%" startElement={<LuLock />}>
              <PasswordInput
                required
                name="password"
                disabled={isLoading}
                placeholder="Password"
                value={state.password}
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
            </InputGroup>
          </Field>
        </VStack>
      </Card.Body>

      <Card.Footer>
        <Button
          w="100%"
          type="submit"
          fontSize="md"
          loading={isLoading}
          colorPalette="primary"
        >
          Login
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default LoginForm;
