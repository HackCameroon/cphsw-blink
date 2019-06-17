import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Divider,
  Drawer as MaterialDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  ShowChart as AnalyticsIcon,
  Book as BookIcon,
  AttachMoney as MoneyIcon,
  CompareArrows as ExchangeIcon
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: theme.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const Drawer = ({ open, tab, handleDrawerClose, handleTabChange }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <MaterialDrawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />

      <List>
        {[
          { text: 'Accounts', icon: <MoneyIcon color="primary" /> },
          { text: 'Transactions', icon: <BookIcon color="primary" /> },
          { text: 'Analytics', icon: <AnalyticsIcon color="primary" /> },
          { text: 'FX Trade', icon: <ExchangeIcon color="primary" /> }
        ].map((tab, index) => (
          <ListItem button key={tab.text} onClick={handleTabChange(index)}>
            <ListItemIcon>{tab.icon}</ListItemIcon>
            <ListItemText primary={tab.text} />
          </ListItem>
        ))}
      </List>
    </MaterialDrawer>
  );
};

export default Drawer;
