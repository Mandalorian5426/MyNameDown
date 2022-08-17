import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  Auth, AuthError, onAuthStateChanged, User,
} from 'firebase/auth';

const useCurrentUser = (auth: Auth, onUserChanged?: (user: User | null) => Promise<void>) => {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const observer = useCallback(async () => onAuthStateChanged(
    auth,
    async (maybeUser) => {
      setLoading(true);
      try {
        if (onUserChanged) {
          await onUserChanged(user);
        }
        setUser(maybeUser);
      } catch (thrownErr) {
        setError(thrownErr as AuthError);
      } finally {
        setLoading(false);
      }
    },
  ), [auth, onUserChanged, user]);

  useEffect(() => { observer(); }, [observer]);

  return useMemo(() => ({
    currentUser: user,
    loading,
    error,
  }), [error, loading, user]);
};

export default useCurrentUser;
