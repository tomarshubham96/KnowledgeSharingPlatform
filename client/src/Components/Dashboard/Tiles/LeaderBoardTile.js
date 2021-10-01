import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
//import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';

import { useHistory } from "react-router-dom";

import users from '../../../data/mockLeaderboardData';

const getInitials = (name = '') => name
.replace(/\s+/, ' ')
.split(' ')
.slice(0, 2)
.map((v) => v && v[0].toUpperCase())
.join('');

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'auto'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  cardHeader: {
    [theme.breakpoints.down('490')]: {
      padding: '14px'            
  }
  },  
  cardTitle: {
    fontSize: '1.5rem',
    [theme.breakpoints.down('490')]: {
      fontSize: '1.2rem'           
  }
  },
  tableHead: {
    [theme.breakpoints.down('490')]: {
      padding: '10px'            
  }
  },
  headtableCell:{
    minWidth: '101px',
    [theme.breakpoints.down('490')]: {
      padding: '10px',
      fontSize: '1rem',
      lineHeight: '1rem'
  }
  },
  tableCellBody: {
    [theme.breakpoints.down('490')]: {
      padding: '5px',
      fontSize: '0.9rem',
      lineHeight: '1rem'
  } 
  }
}));

export default function LeaderBoardTile({ className, ...rest }){
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('490'));
  const [selectUserIds, setSelectedUserIds] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);

  const tableHeadCells1 = [{title:'Name'}, {title:'Email'}, {title:'Points'}, {title:'Phone'}, {title:'Registration Date'}];
  const tableHeadCells2 = [{title:'Name'}, {title:'Points'}];

  const handleSelectAll = (event) => {
    let newSelectedUserIds;

    if (event.target.checked) {
      newSelectedUserIds = users.map((user) => user.id);
    } else {
      newSelectedUserIds = [];
    }

    setSelectedUserIds(newSelectedUserIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectUserIds.indexOf(id);
    let newSelectedUserIds = [];

    if (selectedIndex === -1) {
      newSelectedUserIds = newSelectedUserIds.concat(selectUserIds, id);
    } else if (selectedIndex === 0) {
      newSelectedUserIds = newSelectedUserIds.concat(selectUserIds.slice(1));
    } else if (selectedIndex === selectUserIds.length - 1) {
      newSelectedUserIds = newSelectedUserIds.concat(selectUserIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectUserIds.slice(0, selectedIndex),
        selectUserIds.slice(selectedIndex + 1)
      );
    }

    setSelectedUserIds(newSelectedUserIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  let history = useHistory();

  const handleClick = e =>{
    console.log(e);
    history.push(e);
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      onClick={() => handleClick("leaderboard")}
    >
      <CardHeader
       title="LinkedIn Feeds"  
       classes={{
         title: classes.cardTitle
       }}
       className={classes.cardHeader}/>
          <Table>
            <TableHead className={classes.tableHead}>
              <TableRow>
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectUserIds.length === users.length}
                    color="primary"
                    indeterminate={
                      selectUserIds.length > 0
                      && selectUserIds.length < users.length
                    }
                    onChange={handleSelectAll}
                  /> 
                </TableCell> */}
                {!matches ? (tableHeadCells1.slice(0, limit).map((tableCell) =>
                <TableCell key={tableCell.title} className={classes.headtableCell}>
                  {tableCell.title}
                </TableCell>)): (tableHeadCells2.slice(0, limit).map((tableCell) =>
                <TableCell key={tableCell.title} className={classes.headtableCell}>
                  {tableCell.title}
                </TableCell>))}
              </TableRow>
            </TableHead>
            <TableBody>
            {users.slice(0, limit).map((user) => (
                !matches ? (
                  <TableRow
                  hover
                  key={user.id}
                  selected={selectUserIds.indexOf(user.id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectUserIds.indexOf(user.id) !== -1}
                      onChange={(event) => handleSelectOne(event, user.id)}
                      value="true"
                    />
                  </TableCell> */}
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={user.avatarUrl}
                      >
                        {getInitials(user.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.email}
                  </TableCell>
                  <TableCell>
                    {user.points}
                  </TableCell>
                  <TableCell>
                    {user.phone}
                  </TableCell>
                  <TableCell>
                    {moment(user.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
                ) : (
                  <TableRow
                  hover
                  key={user.id}
                  selected={selectUserIds.indexOf(user.id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectUserIds.indexOf(user.id) !== -1}
                      onChange={(event) => handleSelectOne(event, user.id)}
                      value="true"
                    />
                  </TableCell> */}
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={user.avatarUrl}
                      >
                        {getInitials(user.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.points}
                  </TableCell>
                </TableRow>
                ) 
             ))}          
            </TableBody>
          </Table>
      <TablePagination
        component="div"
        count={users.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10]}
      />
    </Card>
  );
};

LeaderBoardTile.propTypes = {
  className: PropTypes.string
};