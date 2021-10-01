import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import DiscussionForm from '../../../Utils/CodeEditor/DiscussionForm';
import ContentPlayer from '../../../Utils/ContentPlayer';

const useStyles = makeStyles((theme) => ({
    maincontainer: {
        padding: '15px',
        marginTop: '65px'
    },
    middleFirstpaper: {
        width: '100%',
        height: '60%'
    },
    middleSecondpaper: {
        width: '100%',
        height: '40%'
    },
    sidebarpaper: {
        width: '100%',
        height: '600px',
        overflowY: 'auto'
    }
}));

export default function IndustryLearningContent() {
    const classes = useStyles();


    return (

        <Grid container className={classes.maincontainer} justify='center'>

            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Paper className={classes.middleFirstpaper}>
                    <ContentPlayer />
                </Paper>

                <Paper className={classes.middleSecondpaper}>
                    <DiscussionForm tabtitle={'Industry Learning'}/>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}>
                <Paper className={classes.sidebarpaper}>
                <h3 style={{padding: '30px'}}>Industry Learning Index</h3>
                </Paper>
            </Grid>

        </Grid>
    );
}