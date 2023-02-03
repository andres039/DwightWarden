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

import { useMutation, useQuery } from "../../convex/_generated/react";

const AccountInfo = ({ currentAccount, inputsDisabled, setInputsDisabled }) => {
  const [currentAccountInfo, setCurrentAccountInfo] = useState(currentAccount);
  const accounts = useQuery("listAccounts") || [
    { name: "", username: "", password: "", id: "", url: "" },
  ];
  const toggleInputs = () => setInputsDisabled(!inputsDisabled);
  const addAccount = useMutation("addAccount");
  const editAccountInfo = () => {
    if (!inputsDisabled) {
      const postNewAccount = addAccount(currentAccountInfo);
    }
  };
  const cancel = () => {
    setCurrentAccountInfo(currentAccount);
    setInputsDisabled(true);
  };

  return (
    <Center style={{ width: "100%", height: "75%" }}>
      <Card withBorder style={{ minWidth: "70%", paddingBottom: 38 }}>
        <Container>
          <Group position="apart" mt="md" mb="xs">
            <Text weight={800}>{currentAccount.name}</Text>
            <Button
              variant="subtle"
              onClick={() => {
                toggleInputs();
                editAccountInfo();
              }}
            >
              {" "}
              {inputsDisabled ? "Edit" : "Save changes"}{" "}
            </Button>
            {!inputsDisabled && (
              <Button variant="subtle" color="red" onClick={cancel}>
                Cancel
              </Button>
            )}
          </Group>
          <Stack spacing="lg">
            <Group align="end">
              <TextInput
                disabled={inputsDisabled}
                label="Account name"
                onChange={(e) =>
                  setCurrentAccountInfo({
                    ...currentAccountInfo,
                    name: e.target.value,
                  })
                }
                placeholder={currentAccount.name}
                value={currentAccount.name}
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
                disabled={inputsDisabled}
                label="Username"
                onChange={(e) =>
                  setCurrentAccountInfo({
                    ...currentAccountInfo,
                    username: e.target.value,
                  })
                }
                placeholder={currentAccount.username}
                value={currentAccount.username}
                style={{ minWidth: "85%" }}
              />
              <CopyButton value={currentAccountInfo.username}>
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
                onChange={(e) =>
                  setCurrentAccountInfo({
                    ...currentAccountInfo,
                    password: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setCurrentAccountInfo({
                    ...currentAccountInfo,
                    url: e.target.value,
                  })
                }
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
