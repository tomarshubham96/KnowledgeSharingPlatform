import React, { useState } from 'react';
import clsx from 'clsx';
import {
    Box,
    Grid,
    makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import DashboardRowCard from './DashboardRowCard';
import LeaderBoardTile from './Tiles/LeaderBoardTile';

const useStyles = makeStyles((theme) => ({
    row: {
        color: '#000',
        [theme.breakpoints.down('490')]: {
            paddingLeft: '1px',
            paddingRight: '1px'            
        }
    },
    rowCards: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowY: 'hidden',
        overflowX: 'scroll',
        "&::-webkit-scrollbar": {
            display: 'none'
        }
    },
    rowSeeAllCards: {
    },
    rowSeeAllCard:{
        objectFit: 'contain',
        maxWidth: '364px',
        margin: '14px',
        transition: 'transform 450ms',
        '&:hover': {
            transform: 'scale(1.04)'
        }
    },
    rowCard: {
        objectFit: 'contain',
        width: '100%',
        minHeight: '250px',
        minWidth: '380px',
        margin: '20px',
        transition: 'transform 450ms',
        '&:hover': {
            transform: 'scale(1.04)'
        },
        [theme.breakpoints.down('490')]: {
            margin: '15px',
            minWidth: '290px',
            minHeight: '214px',
            height: '140px'          
        }
    },
    rowCardFeatured: {
        maxHeight: '250px',
        '&:hover': {
            transform: 'scale(1.06)'
        }
    }
}));

export default function Row({ title, data, isLargeRow }) {
    const classes = useStyles();
    const [tiles, setTiles] = useState(data);

    return (
        <div className={classes.row}>
            {title !== 'LinkedIn Feeds' ? (
                <div className={classes.row}>
                    <h2> {title} </h2>
                    <Grid
                        container
                        className={classes.rowCards}
                    >
                        {tiles.map((tile) => (
                            <Grid
                                item
                                key={tile.id}
                                className={clsx(classes.rowCard, isLargeRow && classes.rowCardFeatured)}
                            >
                                <DashboardRowCard
                                    tile={tile}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ) : (
                <div className={classes.row}>
                    <h2> {title} </h2>
                        <Grid
                            container
                            className={classes.rowSeeAllCards}
                        >
                            <LeaderBoardTile />
                        </Grid>
                    {data.length > 6 ? <Box
                        mt={3}
                        display="flex"
                        justifyContent="center"
                    >
                        <Pagination
                            color="primary"
                            count={3}
                            size="small"
                        />
                    </Box> : <div></div>}
                </div>
            )}
        </div>
    );
}

