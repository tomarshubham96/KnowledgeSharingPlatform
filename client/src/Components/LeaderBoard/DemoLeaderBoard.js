import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import PageTitle from '../../Utils/PageTitle';
import Toolbar from '../../Utils/Toolbar';
import data from '../../data/mockLeaderboardData';
import DemoGrid from '../../Utils/DemoGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

export default function LeaderBoard(){
  const classes = useStyles();
  const [users] = useState(data);

  return (
    <PageTitle
      className={classes.root}
      title="LeaderBoard"
    >
      <Container maxWidth={false}>
        <Toolbar searchtitle="LeaderBoard" />
        <Box mt={3}>
          {/* <Results users={users} /> */}
          <DemoGrid users={users}/>
        </Box>
      </Container>
    </PageTitle>
  );
};