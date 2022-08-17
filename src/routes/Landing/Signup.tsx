import React, { useState, useMemo } from 'react';
import {
  Box, Button, Stack, Typography,
} from '@mui/material';
import ProviderSignup from './ProviderSignup';
import JoinerSignup from './JoinerSignup';
import UserType from '../../types/userType.types';

const Signup = () => {
  const [userType, setUserType] = useState<UserType>();

  const signupRenders = useMemo(() => {
    const renders: { [key in UserType]: JSX.Element } = {
      joiner: <JoinerSignup />,
      provider: <ProviderSignup />,
    };
    return renders;
  }, []);

  const signupRender = useMemo(() => (userType ? signupRenders[userType] : (
    <Box>
      <Stack spacing={2}>
        <Typography>
          I want to:
        </Typography>
        <Button variant="outlined" onClick={() => setUserType(UserType.LIST_JOINER)}>
          Add my name to lists
        </Button>
        <Typography>
          or
        </Typography>
        <Button variant="outlined" onClick={() => setUserType(UserType.LIST_PROVIDER)}>
          Create Lists for people to add their names to
        </Button>
      </Stack>
    </Box>
  )), [signupRenders, userType]);

  return signupRender;
};

export default Signup;
