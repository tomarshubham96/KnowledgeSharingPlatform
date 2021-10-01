import React, { useState } from 'react';
import {
  Box,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import PageTitle from '../../Utils/PageTitle';
import Toolbar from '../../Utils/Toolbar';
import MicroSolutionCard from './MicroSolutionCard';
import data from '../../data/mockMicroSolutionsData';

const useStyles = makeStyles((theme) => ({
  root: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(1),
        paddingLeft: '25px',
        paddingRight: '25px'
  },
  productCard: {
    height: '100%'
  },
  gridCard: {
    margin: 'auto'
  }
}));

const MicroSolutionsDashboard = () => {
  const classes = useStyles();
  const [microSolutions] = useState(data);

  return (
    <PageTitle
      title="Micro Solutions"
      className={classes.root}
    >
        <Toolbar  searchtitle="Micro Solutions" />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {microSolutions.map((microSolution) => (
              <Grid
                item
                key={microSolution.id}
                lg={4}
                md={6}
                sm={6}
                xs={11}
                className={classes.gridCard}
              >
                <MicroSolutionCard
                  className={classes.productCard}
                  microSolution={microSolution}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        {microSolutions.length >6 ? <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>: <div></div> }

    </PageTitle>
  );
};

export default MicroSolutionsDashboard;