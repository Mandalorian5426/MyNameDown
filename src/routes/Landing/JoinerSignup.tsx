import React from 'react';
import {
  Person, Lock, Badge, Phone,
} from '@mui/icons-material';
import {
  Box, Stack, TextField, InputAdornment, Button,
} from '@mui/material';

const JoinerSignup = () => (
  <Box>
    <Stack spacing={2}>
      <TextField
        id="signup-joiner-username"
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
        id="signup-joiner-password"
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
      <TextField
        id="signup-joiner-first-name"
        label="First Name"
        variant="outlined"
        placeholder="John"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Badge />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="signup-joiner-last-name"
        label="Last Name"
        variant="outlined"
        placeholder="Doe"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Badge />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="signup-joiner-contact-number"
        label="Contact Number"
        variant="outlined"
        placeholder="0400 000 000"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="outlined">Sign up</Button>
    </Stack>
  </Box>
);

export default JoinerSignup;
