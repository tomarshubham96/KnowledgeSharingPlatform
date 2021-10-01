import React, { useState } from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';
import PageTitle from '../../Utils/PageTitle';
import Toolbar from '../../Utils/Toolbar';
import data from '../../data/mockLeaderboardData';
import DemoGrid from '../../Utils/DemoGrid';

const useStyles = makeStyles((theme) => ({
  root: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(1),
        paddingLeft: '25px',
        paddingRight: '25px'
  }
}));

export default function LeaderBoard() {
  const classes = useStyles();
  const [users] = useState(data);

  const gridCommonProps = {

    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      { title: 'Points', field: 'points' },

      { title: 'Phone', field: 'phone' },

      { title: 'Registration Date', field: 'createdAt' }
    ],

    options: {
      search: true,
      paging: true,
      sorting: true,
      isLoading: false
    },

    title: "LeaderBoard",
  };

  return (
    <PageTitle
      className={classes.root}
      title="LeaderBoard"
    >
        <Toolbar searchtitle="LeaderBoard" />
        <Box mt={3}>
          {/* <Results users={users} /> */}
          <DemoGrid
            name='leaderboard'
            type='leaderboard'
            options={gridCommonProps.options}
            columns={gridCommonProps.columns}
            title={gridCommonProps.title}
            editable={gridCommonProps.editable}
            data={users}
            detailPanel={gridCommonProps.detailPanel}
          />
        </Box>
      
    </PageTitle>
  );
};