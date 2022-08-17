import {
  Container, Paper, Stack, Tabs, Tab,
} from '@mui/material';
import React, { useMemo, useState, SyntheticEvent } from 'react';
import Login from './Login';
import Signup from './Signup';

const TAB_LOGIN = 'login';
const TAB_SIGNUP = 'signup';

const Landing = () => {
  const [activeTab, setValue] = useState(TAB_LOGIN);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const landingPageTabs = useMemo(() => {
    const tabs: Record<string, JSX.Element> = {};

    tabs[TAB_LOGIN] = <Login />;
    tabs[TAB_SIGNUP] = <Signup />;

    return tabs;
  }, []);

  const currentTab = useMemo(() => landingPageTabs[activeTab], [activeTab, landingPageTabs]);

  return (
    <Container maxWidth="sm" sx={{ height: '100%' }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        height="100%"
      >
        <Paper
          elevation={0}
          sx={{ padding: 2 }}
        >
          <Tabs value={activeTab} onChange={handleChange} sx={{ marginBottom: 2 }}>
            <Tab label="Login" value={TAB_LOGIN} />
            <Tab label="Sign Up" value={TAB_SIGNUP} />
          </Tabs>

          {currentTab}

        </Paper>
      </Stack>
    </Container>
  );
};

export default Landing;
