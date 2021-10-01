import React from 'react';
import AppRoutes from './AppRoutes';
import AppDrawer from './AppDrawer';
import AppHeader from './AppHeader';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  rootLogin: {
    display: 'flex',
    width: '100%',
    height: '100%',
    background: '#f3f3f3'
  }
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  console.log(isLoggedIn);
  return (
    <div className={classes.root}>
      <AppHeader open={open} handleDrawerOpen={handleDrawerOpen} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      { isLoggedIn ?
        (
          <Router>
            <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
            <AppRoutes open={open} handleDrawerClose={handleDrawerClose} />
          </Router>
        )
        :
        (<div className={classes.rootLogin}>
          <LoginPage setIsLoggedIn={setIsLoggedIn}/>
        </div>
        )
      }

    </div>
  );
}

export default App;
