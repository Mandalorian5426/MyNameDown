import { useCallback, useMemo, useState } from 'react';
import {
  Auth, signOut as signUserOut,
} from 'firebase/auth';

const useSignOut = (
  auth: Auth,
  onSignOut: () => Promise<void>,
) => {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const signOut = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      await signUserOut(auth);
      if (onSignOut) {
        onSignOut();
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [auth, onSignOut]);

  return useMemo(() => ({
    signOut,
    loading,
    error,
  }), [signOut, loading, error]);
};

export default useSignOut;
