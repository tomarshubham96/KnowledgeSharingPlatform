import React from 'react';
import clsx from 'clsx';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from './Components/Dashboard/Dashboard';
import QnAComponent from './Components/QnAComponent/QnAComponent';
import LeaderBoard from './Components/LeaderBoard/LeaderBoard';
import CodeSnippets from './Components/CodeSnippets/CodeSnippets';
import CodeSnippetsDashboard from './Components/CodeSnippets/CodeSnippetsDashboard';
import MicroSolutions from './Components/MicroSolutions/MicroSolutions';
import MicroSolutionsDashboard from './Components/MicroSolutions/MicroSolutionsDashboard';
import ProjectOverviewDashboard from './Components/ProjectOverviews/ProjectOverviewDashboard';
import ProjectOverview from './Components/ProjectOverviews/ProjectOverview/ProjectOverview';
import IndustryLearningDashboard from './Components/IndustryLearning/IndustryLearningDashboard';
import IndustryLearningContent from './Components/IndustryLearning/IndustryLearningContent/IndustryLearningContent';

import DashboardCopy from './Components/Dashboard/DashboardCopy';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import FormStepper from './Forms/FormStepper_copy';


const drawerWidth = 220;


const useStyles = makeStyles((theme) => ({
  mainApp: {
    width: '95%',
    overflow: 'auto',
    height: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('740')]: {
      width: '100%',
  }
},
  mainAppShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),    
    [theme.breakpoints.down('740')]: {
      width: '100%',
  }    
  },
  footer: {
    padding: '25px 0px'
  }
}));

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.footer}>
      {'Copyright © '}
      <Link color="inherit" to="#">
        Knowledge Sharing
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function AppRoutes(props) {
  const classes = useStyles();
  const { open, handleDrawerClose } = props;
  return (
      <main className={clsx(classes.mainApp, open && classes.mainAppShift)} onClick={handleDrawerClose}>
        <Switch>
          <Route exact path='/' component={() => <DashboardCopy open={open} />} />
          <Route path='/qnadashboard' component={() => <QnAComponent open={open} />} />
          <Route path='/leaderboard' component={() => <LeaderBoard open={open} />} />
          <Route path='/codeSnippetsdashboard' component={() => <CodeSnippetsDashboard open={open} />} />
          <Route path='/codeSnippetEditor' component={() => <CodeSnippets open={open} />} />
          <Route path='/microSolutions' component={() => <MicroSolutionsDashboard open={open} />} />
          <Route path='/microSolutionEditor' component={() => <MicroSolutions open={open} />} />
          <Route path='/projectOverviewDashBoard' component={() => <ProjectOverviewDashboard open={open} />} />
          <Route path='/projectOverview' component={() => <ProjectOverview open={open} />} />
          <Route path='/industryLearningDashboard' component={() => <IndustryLearningDashboard open={open} />} />
          <Route path='/industryLearningContent' component={() => <IndustryLearningContent open={open} />} />
          <Route path='/addItem' component={() => <FormStepper open={open} />} />

          <Route path='/trial' component={Dashboard} />
        </Switch>
          <Copyright />
      </main>
  );
}

