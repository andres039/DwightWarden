import React from "react";
import {
  Box,
  Button,
  Divider,
  List,
  Menu,
  Navbar,
  ScrollArea,
  Stack,
  Tabs,
} from "@mantine/core";

const userAccounts = [
  { name: "Gmail", id: 1 },
  { name: "Outlook", id: 2 },
  { name: "BankAccount", id: 3 },
  { name: "YouTube", id: 4 },
];

const Accounts = ({ currentAccount, setCurrentAccount, userAccounts }) => {
  const setAccount = (id: string) => {

    const selectedAccount = userAccounts.find(
      (oneAccount) => id === oneAccount.id
    );
    setCurrentAccount(selectedAccount);
  };
  return (
    <Navbar.Section
      grow
      component={ScrollArea}
      mx="-xs"
      px="xs"
      style={{ padding: 18 }}
    >
      <Stack>
        {userAccounts.map((account) => (
          <Button
            variant="subtle"
            key={account.id}
            onClick={() => setAccount(account.id)}
          >
            {account.name}
          </Button>
        ))}
      </Stack>
    </Navbar.Section>
  );
};

export default Accounts;
