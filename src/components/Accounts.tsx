import React, { useEffect } from "react";
import {
  Button,
  Navbar,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { useQuery } from "../../convex/_generated/react";

const Accounts = ({ setCurrentAccount }) => {
  const accounts = useQuery("listAccounts") || [{name: '', username: '', password: '', id: '0', url: ''}];
  const setAccount = (id: string) => {
    const selectedAccount = accounts.find(
      (oneAccount) => id === oneAccount._id.toString()
      );
      setCurrentAccount(selectedAccount);
    };
useEffect(() => setCurrentAccount(accounts[0]), [accounts])
  return (
    <Navbar.Section
      grow
      component={ScrollArea}
      mx="-xs"
      px="xs"
      style={{ padding: 18 }}
    >
      <Stack>
        {accounts.map((account) => (
          <Button
            variant="subtle"
            key={account._id}
            onClick={() => setAccount(account._id.toString())}
          >
            {account.name}
          </Button>
        ))}
      </Stack>
    </Navbar.Section>
  );
};

export default Accounts;
