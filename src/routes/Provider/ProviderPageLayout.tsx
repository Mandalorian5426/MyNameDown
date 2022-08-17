import React, { useMemo } from 'react';
import {
  FormatListNumbered, Home, Settings,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';

const ProviderHomePageLayout = () => {
  const navigate = useNavigate();

  const listProviderNavigationActions = useMemo(() => ([
    { label: 'Home', icon: <Home />, onClick: () => navigate('/') },
    { label: 'Lists', icon: <FormatListNumbered />, onClick: () => navigate('/lists') },
    { label: 'Settings', icon: <Settings />, onClick: () => navigate('/provider/settings') },
  ]), [navigate]);

  return (
    <PageLayout bottomNavigationActions={listProviderNavigationActions} />
  );
};

export default ProviderHomePageLayout;
