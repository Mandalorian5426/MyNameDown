import {
  Auth,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { useCallback, useMemo, useState } from 'react';

export default (
  auth: Auth,
) => {
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<UserCredential>();
  const [loading, setLoading] = useState<boolean>(false);

  const signUp = useCallback(async (
    email: string,
    password: string,
  ) => {
    setLoading(true);
    setError(undefined);
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setUser(newUser);
    } catch (thrownErr) {
      setError(thrownErr);
    } finally {
      setLoading(false);
    }
  }, [auth]);

  return useMemo(() => ({
    createUserWithEmailAndPassword: signUp,
    user,
    loading,
    error,
  }), [signUp, user, loading, error]);
};
