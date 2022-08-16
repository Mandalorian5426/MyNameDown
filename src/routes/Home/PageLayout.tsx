import React from 'react';
import {
  FormatListNumbered, Home, Settings,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/BottomNavigation/BottomNavigation';

const HomePageLayout = () => {
  const navigate = useNavigate();

  const listProviderNavigationActions = [
    { label: 'Home', icon: <Home />, onClick: () => navigate('/') },
    { label: 'Lists', icon: <FormatListNumbered />, onClick: () => navigate('/lists') },
    { label: 'Settings', icon: <Settings />, onClick: () => navigate('/settings') },
  ];

  return (
    <PageLayout bottomNavigationActions={listProviderNavigationActions} />
  );
};

export default HomePageLayout;
