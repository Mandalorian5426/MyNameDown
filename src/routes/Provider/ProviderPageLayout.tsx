import React, { useMemo } from 'react';
import {
  FormatListNumbered, Home, Settings,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import Routes from '../../types/routes';

const ProviderHomePageLayout = () => {
  const navigate = useNavigate();

  const listProviderNavigationActions = useMemo(() => ([
    { label: 'Home', icon: <Home />, onClick: () => navigate(Routes.ROUTE_PROVIDER) },
    { label: 'Lists', icon: <FormatListNumbered />, onClick: () => navigate(Routes.ROUTE_LISTS) },
    { label: 'Settings', icon: <Settings />, onClick: () => navigate(Routes.ROUTE_PROVIDER_SETTINGS) },
  ]), [navigate]);

  return (
    <PageLayout bottomNavigationActions={listProviderNavigationActions} />
  );
};

export default ProviderHomePageLayout;
