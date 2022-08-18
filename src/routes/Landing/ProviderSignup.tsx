import React, { useCallback, useEffect, useState } from 'react';
import {
  Person, Lock, Badge, Phone,
} from '@mui/icons-material';
import {
  Box, Stack, TextField, InputAdornment, Button,
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';
import Routes from '../../types/routes';
import ProviderUserAccount from '../../types/providerUserAccount.type';
import firestore, { Collections } from '../../api/firestore';

const ProviderSignup = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const {
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  } = useSignUp(auth);

  const signUpProvider = useCallback(() => {
    if (username && password) {
      createUserWithEmailAndPassword(username, password);
    }
  }, [createUserWithEmailAndPassword, password, username]);

  useEffect(() => {
    if (user && !error && !loading) {
      const userAccount: ProviderUserAccount = {
        name,
        contactNumber,
      };
      firestore.addOrUpdate(user.user.uid, Collections.USER_ACCOUNT, userAccount);
      navigate(Routes.ROUTE_PROVIDER);
    }
  }, [navigate, user, error, loading, name, contactNumber, username]);

  return (
    <Box>
      <Stack spacing={2}>
        <TextField
          id="signup-provider-username"
          label="Username"
          variant="outlined"
          type="email"
          placeholder="example@email.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="signup-provider-password"
          label="Password"
          variant="outlined"
          type="password"
          placeholder="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="signup-provider-name"
          label="Name"
          variant="outlined"
          placeholder="Example Sport Facility"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Badge />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="signup-provider-contact-number"
          label="Contact Number"
          variant="outlined"
          placeholder="0400 000 000"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="outlined"
          onClick={() => signUpProvider()}
        >
          Sign up
        </Button>
      </Stack>
    </Box>
  );
};

export default ProviderSignup;
