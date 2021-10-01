import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';
import FormStepper from './Forms/FormStepper';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    top: 0
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('740')]: {
      width: '100%',
    }
  },
  menuButton: {
    marginRight: 0,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  dialogContent: {
    padding: 0
  },
  headerToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('670')]: {
      minHeight: '64px'
    }
  },
  firstDiv: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  secondDiv: {
    width: '30%',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('670')]: {
      display: 'none'
    }
  },
  menuPopper: {
    [theme.breakpoints.up('670')]: {
      display: 'none'
    }
  },
  dialog: {
    [theme.breakpoints.down('500')]: {      
    zIndex: '0 ! important',
    paddingTop: '10px'
    }
  },
  dialogTitle: {
    [theme.breakpoints.down('1327')]: {
      padding: '10px 24px'
      }
  },
  dialogActions: {
    [theme.breakpoints.down('1327')]: {      
      padding: '6px'
      }
  },
  loggedInDiv: {
    display: 'flex',
    width: '30%',
    justifyContent: 'flex-end'
  }
}));

export default function AppHeader(props) {
  const classes = useStyles();
  const { open, handleDrawerOpen,isLoggedIn, setIsLoggedIn={setIsLoggedIn}} = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('388'));
  const fullScreen = useMediaQuery(theme.breakpoints.down('500'));
  const [formOpen, setFormOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleExitClick =() => {
    setIsLoggedIn(false);
  }

  const handleCloseMenu = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  const prevOpen = React.useRef(openMenu);
  React.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  const handleClickOpen = () => {
    setFormOpen(true);
    setOpenMenu(false);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (formOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [formOpen]);

  return (
    <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.headerToolbar}>
        <div className={classes.firstDiv}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(!isLoggedIn && classes.menuButtonHidden, classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          {!matches ? (
            <Typography component="h1" variant="h6" color="inherit" className={classes.title}>
            Knowledge Sharing Platform (Dummy Data)
          </Typography>
          ) : (
            <Typography component="h1" variant="h6" color="inherit" className={classes.title}>
            KSP (Dummy Data)
          </Typography>
          )}          
        </div>
        {isLoggedIn ? <div className={classes.secondDiv}>
          <IconButton
            color="inherit"
            onClick={handleClickOpen}
          >
            <Badge color="secondary">
              <Tooltip title="Add">
                <AddIcon />
              </Tooltip>
            </Badge>
          </IconButton>
          <Dialog
            fullScreen={fullScreen}
            open={formOpen}
            onClose={handleClose}
            fullWidth
            maxWidth={'md'}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            className={classes.dialog}
          >
            <DialogTitle id="scroll-dialog-title" className={classes.dialogTitle}>Add New</DialogTitle>
            <DialogContent dividers className={classes.dialogContent}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}             
              >
                <FormStepper />
              </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
              <Button onClick={handleClose} color='primary'>
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <IconButton color="inherit">
            <Tooltip title="See All Bookmarks">
              <BookmarksOutlinedIcon />
            </Tooltip>
          </IconButton>
          <IconButton color="inherit">
            <Badge color="secondary">
              <Tooltip title="Notifications">
                <NotificationsIcon />
              </Tooltip>
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Tooltip title="Log Out">
              <ExitToAppOutlinedIcon onClick={handleExitClick}/>
            </Tooltip>
          </IconButton>
        </div> 
        : 
            <div className={classes.loggedInDiv}>
            <Button
            color="inherit"
            size="medium"
            > Sign Up
              </Button>
              </div>
        }
        {isLoggedIn ? <div className={classes.menuPopper}>
          <IconButton
            color="inherit"
            ref={anchorRef}
            aria-controls={openMenu ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <Badge color="secondary">
              <Tooltip title="Menu">
                <MoreVertIcon />
              </Tooltip>
            </Badge>
        </IconButton>
          <Popper open={openMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleCloseMenu}>
                    <MenuList autoFocusItem={openMenu} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={handleClickOpen}>Add Item</MenuItem>
                      <MenuItem onClick={handleCloseMenu}>Bookmarks</MenuItem>
                      <MenuItem onClick={handleCloseMenu}>Notifications</MenuItem>
                      <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        :
        <div>  
        </div>}
      </Toolbar>
    </AppBar>
  );
}
