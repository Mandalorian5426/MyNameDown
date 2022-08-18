import React, { useMemo } from 'react';
import {
  ChevronLeft, PlaylistAdd, FormatListNumbered,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import Routes from '../../types/routes';

const ListsPageLayout = () => {
  const navigate = useNavigate();

  const listNavigationActions = useMemo(() => ([
    { label: 'Back', icon: <ChevronLeft />, onClick: () => navigate(Routes.ROUTE_PROVIDER) },
    { label: 'Lists', icon: <FormatListNumbered />, onClick: () => navigate(Routes.ROUTE_LISTS) },
    { label: 'Add', icon: <PlaylistAdd />, onClick: () => navigate(Routes.ROUTE_NEW_LIST) },
  ]), [navigate]);

  return (
    <PageLayout bottomNavigationActions={listNavigationActions} />
  );
};

export default ListsPageLayout;
