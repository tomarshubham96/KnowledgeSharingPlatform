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
    }
}));

export default function CodeSnippets() {
    const classes = useStyles();


    return (

        <Grid container className={classes.maincontainer} justify='center'>

            <Grid item xs={12} sm={12} md={9} lg={9}>
                <Paper className={classes.middlepaper}>
                    <CodeEditorDisplay title={'Code Snippet Title'} newS={false}/>
                </Paper>

                <Paper className={classes.middlepaper}>
                    <DiscussionForm tabtitle={'Code Snippets'} desc={'Code Snippet Desc'}/>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3}>
                <Paper className={classes.sidebarpaper}>
                <h3>Some Recent Code Snippets</h3>
                </Paper>
            </Grid>

        </Grid>
    );
}