import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    makeStyles,
    IconButton
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0px'
    },
    searchCard: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    searchButton: {
        width: '80%',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('490')]: {
         width: '75%'          
      }
    },
    options: {
        display: 'flex',
        width: '20%',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('490')]: {
            width: '25%',
            justifyContent: 'space-around',          
         }
    },
    toolbarButton: {
        padding: '7px'
    }
}));

const Toolbar = ({ className, searchtitle, ...rest }) => {
    const classes = useStyles();

    return (
        <div
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Card>
                <CardContent className={classes.searchCard}>
                    <div className={classes.searchButton}>
                        <TextField
                        size='small'
                        fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SvgIcon
                                            fontSize="small"
                                            color="action"
                                        >
                                            <SearchIcon />
                                        </SvgIcon>
                                    </InputAdornment>
                                )
                            }}
                            placeholder={`Search ${searchtitle}`}
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.options}>
                        {/* <Button
                            variant="contained"
                        >
                            <Link
                                to='/'>
                                Dashboard
                            </Link>
                        </Button> */}
                        <IconButton
                            size="medium"
                            title="Filter"
                            className={classes.toolbarButton}
                        >
                            <FilterListIcon />
                        </IconButton>
                        <IconButton
                            size="medium"
                            title="Sort"
                            className={classes.toolbarButton}
                        >
                            <SortIcon />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

Toolbar.propTypes = {
    className: PropTypes.string
};

export default Toolbar;