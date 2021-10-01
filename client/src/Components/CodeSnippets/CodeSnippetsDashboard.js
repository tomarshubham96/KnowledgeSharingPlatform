import React, { useState } from 'react';
import {
  Box,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import PageTitle from '../../Utils/PageTitle';
import Toolbar from '../../Utils/Toolbar';
import CodeSnippetCard from './CodeSnippetCard';
import data from '../../data/mockCodeSnippetsData';

const useStyles = makeStyles((theme) => ({
  root: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(1),
        paddingLeft: '25px',
        paddingRight: '25px'
  },
  container: {
    marginTop: '10px'
  },
  productCard: {
    height: '100%'
  },
  gridCard: {
    margin: 'auto'
  }
}));

const CodeSnippetsDashboard = () => {
  const classes = useStyles();
  const [codeSnippets] = useState(data);

  return (
    <PageTitle
      title="Code Snippets"
      className={classes.root}
    >
        <Toolbar searchtitle="Code Snippets" />
          <Grid
            container
            spacing={3}
            className={classes.container}
          >
            {codeSnippets.map((codeSnippet) => (
              <Grid
                item
                key={codeSnippet.id}
                lg={4}
                md={6}
                sm={6}
                xs={11}
                className={classes.gridCard}
              >
                <CodeSnippetCard
                  className={classes.productCard}
                  codeSnippet={codeSnippet}
                />
              </Grid>
            ))}
          </Grid>
        {codeSnippets.length >6 ? <Box
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
    </PageTitle>
  );
};

export default CodeSnippetsDashboard;