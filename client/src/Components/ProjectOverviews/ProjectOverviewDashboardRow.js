import React, { useState } from 'react';
import clsx from 'clsx';
import {
    Box,
    Grid,
    makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import ProjectOverviewCard from './ProjectOverviewCard';

const useStyles = makeStyles((theme) => ({
    row: {
        color: '#000',
        paddingLeft: '10px',
        paddingRight: '10px',
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
        minHeight: '240px',
        minWidth: '395px',
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
            transform: 'scale(1.09)'
        }
    }
}));

export default function Row({ title, projectOverviews, isLargeRow }) {
    const classes = useStyles();
    const [projects, setProjects] = useState(projectOverviews);

    return (
        <div className={classes.row}>
            {title !== 'See All' ? (
                <div className={classes.row}>
                    <h2> {title} </h2>
                    <Grid
                        container
                        className={classes.rowCards}
                    >
                        {projects.map((project) => (
                            <Grid
                                item
                                key={project.id}
                                className={clsx(classes.rowCard, isLargeRow && classes.rowCardFeatured)}
                            >
                                <ProjectOverviewCard
                                    projectOverview={project}
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
                            {projectOverviews.map((projectOverview) => (
                                <Grid
                                    item
                                    key={projectOverview.id}
                                    lg={4}
                                    md={6}
                                    sm={6}
                                    xs={11}                                   
                                    className={classes.rowSeeAllCard}
                                >
                                    <ProjectOverviewCard
                                        projectOverview={projectOverview}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    {projectOverviews.length > 6 ? <Box
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

