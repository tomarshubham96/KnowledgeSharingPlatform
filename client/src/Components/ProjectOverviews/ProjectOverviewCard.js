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
    padding: '3px'
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
    alignItems: 'flex-end',
    display: 'flex',
    width: '50%',
    padding: '5px'
  },
  createdBy: {
    marginLeft: '8px'
  }, description: {
    [theme.breakpoints.down('400')]: {
      letterSpacing: '0em'
    }
  }
}));

const ProjectOverviewCard = ({ className, projectOverview, ...rest }) => {
  const classes = useStyles();

  let history = useHistory();

  const handleClick = () => {
    history.push("projectOverview");
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
        >
          {projectOverview.projectTitle}
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
          {projectOverview.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Grid
        container
        justify="space-between"
        className={classes.statsItem}
      >
        <Grid
          className={classes.authorGrid}
          item
        >
          <Box
          >
            <Avatar
              alt="User"
              className={classes.avatar}
              src={projectOverview.avatarUrl}
            />
          </Box>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="subtitle2"
            className={classes.createdBy}
          >
            {projectOverview.authorName}
          </Typography>
        </Grid>
        <Grid
          className={classes.statsItem}
          item
        >
          {projectOverview.createdAt}
          {/* <Button size="small">
              <Link
                to='/projectOverview'
              >
                Checkout
                  </Link>
            </Button> */}
        </Grid>
      </Grid>
    </Card>
  );
};

ProjectOverviewCard.propTypes = {
  className: PropTypes.string,
  projectOverview: PropTypes.object.isRequired
};

export default ProjectOverviewCard;