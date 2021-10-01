import React, { useState } from 'react';
import {
  Box,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import PageTitle from '../../Utils/PageTitle';
import Toolbar from '../../Utils/Toolbar';
import QnACard from './QnACard';
import data from '../../data/mockQnAData';

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

const QnAComponent = () => {
  const classes = useStyles();
  const [qnas] = useState(data);

  return (
    <PageTitle
      title="QnA"
      className={classes.root}
    >
    
        <Toolbar searchtitle="QnA's" />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {qnas.map((qna) => (
              <Grid
                item
                key={qna.id}
                lg={4}
                md={6}
                sm={6}
                xs={11}
                className={classes.gridCard}
              >
                <QnACard
                  className={classes.productCard}
                  qna={qna}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        {qnas.length >6 ? <Box
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

export default QnAComponent;