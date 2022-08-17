import React from 'react';
import { Person, Lock } from '@mui/icons-material';
import {
  Box, Stack, TextField, InputAdornment, Button,
} from '@mui/material';

const Login = () => (
  <Box>
    <Stack spacing={2}>
      <TextField
        id="login-username"
        label="Username"
        variant="outlined"
        type="email"
        placeholder="example@email.com"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Person />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="login-password"
        label="Password"
        variant="outlined"
        type="password"
        placeholder="password"
        autoComplete="current-password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="outlined">Login</Button>
    </Stack>
  </Box>
);

export default Login;
