import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import PageTitle from '../../Utils/PageTitle';
import Row from './DashboardTilesRow';
import data from '../../data/dashBoardTilesData';

const useStyles = makeStyles((theme) => ({
  container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(1),
        paddingLeft: '25px',
        paddingRight: '25px',
        [theme.breakpoints.down('490')]: {
          paddingLeft: '10px',
          paddingRight: '10px',        
      }
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();

  return (
    <PageTitle
      title="Dashboard"
      className={clsx(classes.container)}
    >
                <Row title="Dashboard Tiles" data={data} isLargeRow />  
                <Row title="LinkedIn Feeds" data={data} /> 
    </PageTitle>
  );
}