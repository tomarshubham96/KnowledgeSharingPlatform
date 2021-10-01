import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import CodeEditorDisplay from '../../Utils/CodeEditor/CodeEditorDisplay';
import DiscussionForm from '../../Utils/CodeEditor/DiscussionForm';

const useStyles = makeStyles((theme) => ({
    maincontainer: {
        padding: '15px',
        marginTop: '65px'
    },
    middlepaper: {
        width: '100%',
        height: '50%',
        minHeight: '300px',
        maxHeight: '300px'
    },
    sidebarpaper: {
        width: '100%',
        height: '600px',
        overflowY: 'auto'
    },
    takenotepaper: {
        width: '100%',
        height: '35%'
    }
}));

export default function MicroSolutions() {
    const classes = useStyles();


    return (

        <Grid container className={classes.maincontainer} justify='center'>

            <Grid item xs={12} sm={12} md={9} lg={9}>
                <Paper className={classes.middlepaper}>
                    <CodeEditorDisplay title={'Micro Solution Title'}/>
                </Paper>

                <Paper className={classes.middlepaper}>
                    <DiscussionForm tabtitle={'Micro Solutions'} desc={'Micro Solution Desc'}/>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3}>
                <Paper className={classes.sidebarpaper}>
                <h3>Some Recent Micro Solutions</h3>
                </Paper>
            </Grid>

        </Grid>
    );
}