import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
import SignIn from "../components/Account/SignIn";
import SignUp from "../components/Account/SignUp";
import TabPanel from "../components/TabPanel";
import { useState } from "react";

export default function Account() {
  const [value, setValue] = useState(0);

  const hanldeChange = (_, x) => {
    setValue(x);
  };

  return (
    <Container maxWidth="sm">
      <Stack sx={{ height: "100vh" }} justifyContent="center">
        <Box sx={{ border: 1, borderColor: "primary.main", borderRadius: 2 }}>
          <Tabs
            sx={{ borderBottom: 1, borderColor: "divider" }}
            value={value}
            onChange={hanldeChange}
            variant="fullWidth"
          >
            <Tab label="Sign In" id="tab-0" />
            <Tab label="Sign Up" id="tab-1" />
          </Tabs>

          <Container sx={{ py: 2 }}>
            <TabPanel
              value={value}
              children={<SignIn />}
              idPrefix="tab"
              index={0}
            ></TabPanel>

            <TabPanel
              value={value}
              children={<SignUp />}
              idPrefix="tab"
              index={1}
            ></TabPanel>
          </Container>
        </Box>
      </Stack>
    </Container>
  );
}
