import React from 'react';
import {
  Box, Paper, BottomNavigation as MuiBottomNavigation, BottomNavigationAction,
} from '@mui/material';
import { Outlet } from 'react-router-dom';

type PageLayoutProps = {
  label: string
  icon: JSX.Element
  onClick: () => void
};

const PageLayout = (
  { bottomNavigationActions }: { bottomNavigationActions: PageLayoutProps[] },
) => (
  <Box>
    <Outlet />
    <Paper
      sx={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
      }}
      elevation={3}
    >
      <MuiBottomNavigation showLabels>
        {
            bottomNavigationActions.map(({ label, icon, onClick }) => (
              <BottomNavigationAction label={label} icon={icon} onClick={onClick} key={label} />
            ))
          }
      </MuiBottomNavigation>
    </Paper>
  </Box>
);

export default PageLayout;
