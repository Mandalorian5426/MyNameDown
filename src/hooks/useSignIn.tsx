import { useCallback, useMemo, useState } from 'react';
import {
  Auth, signInWithEmailAndPassword, UserCredential,
} from 'firebase/auth';

const useSignIn = (
  auth: Auth,
) => {
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<UserCredential>();
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = useCallback(async (
    email: string,
    password: string,
  ) => {
    setLoading(true);
    setError(undefined);
    try {
      const signedInUser = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setUser(signedInUser);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [auth]);

  return useMemo(() => ({
    signInWithEmailAndPassword: signIn,
    user,
    loading,
    error,
  }), [signIn, user, loading, error]);
};

export default useSignIn;
