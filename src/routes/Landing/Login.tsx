import React, { useCallback, useState, useEffect } from 'react';
import { Person, Lock } from '@mui/icons-material';
import {
  Box, Stack, TextField, InputAdornment, Button,
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useSignIn from '../../hooks/useSignIn';
import Routes from '../../types/routes';

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validateForm, setValidateForm] = useState(false);

  const {
    signInWithEmailAndPassword, user, loading, error,
  } = useSignIn(auth);

  const login = useCallback(() => {
    setValidateForm(!(username && password));
    if (username && password) {
      signInWithEmailAndPassword(username, password);
    }
  }, [signInWithEmailAndPassword, username, password]);

  useEffect(() => {
    if (user && !error && !loading) {
      navigate(Routes.ROUTE_PROVIDER);
    }
  }, [navigate, user, error, loading]);

  return (
    <Box>
      <Stack spacing={2}>
        <TextField
          id="login-username"
          label="Username"
          variant="outlined"
          type="email"
          placeholder="example@email.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={validateForm && !username}
          helperText={validateForm && !username && 'Required for login'}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={validateForm && !password}
          helperText={validateForm && !password && 'Required for login'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="outlined" onClick={() => login()}>Login</Button>
      </Stack>
    </Box>
  );
};

export default Login;
