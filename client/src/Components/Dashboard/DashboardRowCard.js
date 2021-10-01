import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  CardMedia,
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
  media: {
    minHeight: 125,
  },
  dashBoardCardContent: {
    padding: '12px',
    [theme.breakpoints.down('490')]: {
      padding: '8px',
      paddingBottom: '8px ! important'         
  }
  },
  dashBoardTitle: {
    fontWeight: 600,
    [theme.breakpoints.down('490')]: {
      marginBottom: '0.2em',
      fontSize: '1em',
      lineHeight: 1.4,
      letterSpacing: '0.00938em'         
  }
  },
  dashBoardDesc: {
    fontSize: '0.9rem',
    [theme.breakpoints.down('490')]: {
      fontSize: '0.8rem',
      lineHeight: '1.4'
  }
  }
}));

const DashboardRowCard = ({ className, tile, ...rest }) => {
  const classes = useStyles();

  let history = useHistory();
  
  const handleClick = (e) =>{
    history.push(e);
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      onClick={()=>handleClick(tile.name)}
    >
        <CardMedia
          className={classes.media}
          image={tile.img}
          title={tile.title}
        />
      <CardContent className={classes.dashBoardCardContent}>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="subtitle1"
          className={classes.dashBoardTitle}
        >
          {tile.title}
        </Typography>
        <Typography
          color="textPrimary"
          variant="subtitle2"
          className={classes.dashBoardDesc}
        >
          {tile.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

DashboardRowCard.propTypes = {
  className: PropTypes.string,
  tile: PropTypes.object.isRequired
};

export default DashboardRowCard;