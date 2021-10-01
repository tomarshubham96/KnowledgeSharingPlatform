import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex',
    padding: '5px',
    [theme.breakpoints.down('490')]: {
      fontSize: '0.789rem',
      padding: '5px'
    }
  },
  cardContentRoot: {
    height: '160px',
    [theme.breakpoints.down('345')]: {
      height: '140px'           
  },
  [theme.breakpoints.down('490')]: {
    padding: '8px'
  }
  },
  cardTitle: {
    [theme.breakpoints.down('490')]: {
      fontSize: '1.1rem'
    },
    [theme.breakpoints.down('365')]: {
      fontSize: '0.9rem',
      fontWeight: 550
    }
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  avatar: {
    margin: '5px'
  },
  authorGrid: {
    alignItems: 'center',
    display: 'flex',
    width: '50%',
    padding: '5px'
  },
  createdBy: {
    marginLeft: '4px',
    [theme.breakpoints.down('490')]: {
      marginLeft: '1px'
    }
  },
  description: {
    [theme.breakpoints.down('400')]: {
      letterSpacing: '0em'           
  }
  }
}));

const IndustryLearningCard = ({ className, industryLearning, ...rest }) => {
  const classes = useStyles();

  let history = useHistory();
  
  const handleClick = () =>{
    history.push("industryLearningContent");
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      onClick={handleClick}
    >
      <CardContent className={classes.cardContentRoot}>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h6"
          classes={{
            h6: classes.cardTitle
          }}
        >
          {industryLearning.projectTitle}
        </Typography>
        <Box flexGrow={1} />
      <Divider />
        <Typography
          color="textPrimary"
          variant="body2"
          gutterBottom
          classes={{
            body2: classes.description,
          }}
        >
          {industryLearning.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
        <Grid
          container
          justify="space-between"
        >
          <Grid
          item
          className={classes.authorGrid}
        >
            <Box
            >
              <Avatar
                alt="User"
                className={classes.avatar}
                src={industryLearning.avatarUrl}
              />
            </Box>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="subtitle2"
              className={classes.createdBy}
            >
              {industryLearning.authorName}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
              {industryLearning.createdAt}
          </Grid>
        </Grid>
    </Card>
  );
};

IndustryLearningCard.propTypes = {
  className: PropTypes.string,
  industryLearning: PropTypes.object.isRequired
};

export default IndustryLearningCard;