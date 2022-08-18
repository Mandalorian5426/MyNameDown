import { getAuth } from 'firebase/auth';
import React from 'react';
import useCurrentUser from '../../hooks/useCurrentUser';

const ProviderSettings = () => {
  const auth = getAuth();
  const { currentUser } = useCurrentUser(auth);

  return (
    <div>
      Settings
      <div>
        { currentUser?.uid }
      </div>
    </div>
  );
};

export default ProviderSettings;
