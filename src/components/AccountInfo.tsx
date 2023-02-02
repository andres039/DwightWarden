import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Center,
  Group,
  Stack,
  Text,
  TextInput,
  CopyButton,
} from "@mantine/core";

import { useQuery } from "../../convex/_generated/react";

const AccountInfo = ({ currentAccount }) => {
  const [inputsDisabled, setInputsDisabled] = useState(true);
  const accounts = useQuery("listAccounts") || [{name: '', username: '', password: '', id: '', url: ''}];
  const toggleInputs = () => setInputsDisabled(!inputsDisabled);
  const updateAccountInfo = (key: string, newData: string) => {
  };

  return (
    <Center style={{ width: "100%", height: "75%" }}>
      <Card withBorder style={{ minWidth: "70%", paddingBottom: 38 }}>
        <Container>
          <Group position="apart" mt="md" mb="xs">
            <Text weight={800}>{currentAccount.name}</Text>
            <Button variant="subtle" onClick={toggleInputs}>
              {" "}
              {inputsDisabled ? "Edit" : "Done"}{" "}
            </Button>
          </Group>
          <Stack spacing="lg">
            <Group align="end">
              <TextInput
                disabled={inputsDisabled}
                label="Username"
                onChange={(e) => updateAccountInfo("username", e.target.value)}
                placeholder={currentAccount.username}
                value={currentAccount.username}
                style={{ minWidth: "85%" }}
              />
              <CopyButton value={currentAccount.username}>
                {({ copied, copy }) => (
                  <Button color={copied ? "teal" : "blue"} onClick={copy}>
                    {copied ? "Copied" : "Copy"}
                  </Button>
                )}
              </CopyButton>
            </Group>
            <Group align="end">
              <TextInput
                placeholder={currentAccount.password}
                label="Password"
                disabled={inputsDisabled}
                onChange={(e) => updateAccountInfo("password", e.target.value)}
                style={{ minWidth: "85%" }}
                value={currentAccount.password}
              ></TextInput>
              <CopyButton value={currentAccount.password}>
                {({ copied, copy }) => (
                  <Button color={copied ? "teal" : "blue"} onClick={copy}>
                    {copied ? "Copied" : "Copy"}
                  </Button>
                )}
              </CopyButton>
            </Group>
            <Group align="end">
              <TextInput
                placeholder={currentAccount.url}
                label="URL"
                disabled={inputsDisabled}
                onChange={(e) => updateAccountInfo("url", e.target.value)}
                style={{ minWidth: "85%" }}
                value={currentAccount.url}
              ></TextInput>
              <CopyButton value={currentAccount.url}>
                {({ copied, copy }) => (
                  <Button color={copied ? "teal" : "blue"} onClick={copy}>
                    {copied ? "Copied" : "Copy"}
                  </Button>
                )}
              </CopyButton>
            </Group>
          </Stack>
        </Container>
      </Card>
    </Center>
  );
};

export default AccountInfo;
