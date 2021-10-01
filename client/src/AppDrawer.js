import React from 'react';
import clsx from 'clsx';
import logo from './images/affinelogo.PNG';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { MainListItems } from './routes/AppDrawerRoutes';

import './App.css';


const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        backgroundImage: `url(${logo})`
    },
    drawerPaper: {
        position: 'sticky',
        top: 0,
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        height: '100vh',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down('740')]: {
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            zIndex: 2,
            width: '220px',
            background: 'white',
            boxShadow: '2px 0px 5px rgba(0,0,0,0.5)',
            transition: 'width 2s'
        }
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        left: 0,
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        minWidth: '72px',
        width: '72px',
        [theme.breakpoints.down('740')]: {
            display: 'none'
        }
    }
}));


export default function AppDrawer(props) {
    console.log(props);
    const classes = useStyles();
    const { open, handleDrawerClose } = props;

    return (
            <nav
                className={clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}
                open={open}
                onClick={handleDrawerClose}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <MainListItems />
                {/* <Divider />
        <List>{secondaryListItems}</List> */}
            </nav>
    );
}

