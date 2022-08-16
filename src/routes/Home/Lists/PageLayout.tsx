import React from 'react';
import {
  ChevronLeft, PlaylistAdd, FormatListNumbered,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../../components/BottomNavigation/BottomNavigation';

const ListsPageLayout = () => {
  const navigate = useNavigate();

  const listNavigationActions = [
    { label: 'Back', icon: <ChevronLeft />, onClick: () => navigate('/') },
    { label: 'Lists', icon: <FormatListNumbered />, onClick: () => navigate('/lists') },
    { label: 'Add', icon: <PlaylistAdd />, onClick: () => navigate('/lists/new') },
  ];

  return (
    <PageLayout bottomNavigationActions={listNavigationActions} />
  );
};

export default ListsPageLayout;
