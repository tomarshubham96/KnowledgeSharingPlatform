import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import QnATile from './Tiles/QnATile';
import LeaderBoardTile from './Tiles/LeaderBoardTile';
import { CardContent, CardHeader, CardActions } from '@material-ui/core';
import PageTitle from '../../Utils/PageTitle';
import { useHistory } from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Knowledge Sharing
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
    width: '90%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  paper: {
    padding: theme.spacing(2),
    // overflow: 'auto'
  },
  fixedHeight: {
    height: '100%',
    margin: 'auto'
  },
  cardDisplay: {
    height: '100%',
    width: '100%',
    display: 'inline-block'
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = e =>{
    console.log(e);
    history.push(e);
  }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <PageTitle
      title="Dashboard"
      className={clsx(classes.container)}
    >
      <Grid container spacing={2}>
        <Grid container item xs={12} md={8} lg={8} spacing={2} className={fixedHeightPaper}>
          <Grid item xs={6} md={6} lg={6}>
            <Card className={classes.cardDisplay} onClick={() => handleClick('codeSnippetsdashboard')}>
              <CardHeader title="Code Snippets" />
              <CardContent>
                Small Code Snippets that can be utilized by other teams to deliver faster and with confidence.
               </CardContent> 
               <CardActions>
              </CardActions>           
            </Card>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Card className={classes.cardDisplay} onClick={() => handleClick('microSolutions')}>
              <CardHeader title="Micro-Solutions" />
              <CardContent>
                Like Code Snippets but dealing with a solution of a small problem statement rather than just a line or two of code.
               </CardContent>
               <CardActions>
              </CardActions> 
            </Card>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Card className={classes.cardDisplay} onClick={() => handleClick('projectOverviewDashBoard')}>
              <CardHeader title="Project Overviews" />
              <CardContent>
                Every success story, lessons learnt and the technical and business aspect of the project.
               </CardContent>
               <CardActions>
              </CardActions> 
            </Card>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Card className={classes.cardDisplay} onClick={() => handleClick('projectOverviewDashBoard')}>
              <CardHeader title="Industry Learning" />
              <CardContent>
                Industry Related learning, basic and fundamental concepts on various aspects of an industry to enhance delivery performance from domain perspective.
               </CardContent>
               <CardActions>
              </CardActions> 
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <QnATile />
        </Grid>
        <Grid item xs={12}>
          <LeaderBoardTile className={classes.paper} />
        </Grid>
      </Grid>
      <Box pt={4}>
        <Copyright />
      </Box>
    </PageTitle>
  );
}