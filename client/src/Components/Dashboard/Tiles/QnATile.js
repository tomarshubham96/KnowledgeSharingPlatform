import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

import mockData from '../../../data/mockQnAData';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48,
    marginRight: '50px',
    borderRadius: '25px'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

export default function QnATile(props){
  const { className, ...rest } = props;

  const classes = useStyles();

  const [qnas] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Recent QnA's"
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {qnas.map((qna, i) => (
            <ListItem
              divider={i < qnas.length - 1}
              key={qna.id}
            >
              <ListItemAvatar>
                <img
                  alt="Product"
                  className={classes.image}
                  src={qna.avatarUrl}
                />
              </ListItemAvatar>
              <ListItemText
                primary={qna.createdBy}
              />
              <IconButton
                edge="end"
                size="small"
              >
                <MoreVertIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          <Link
            to='/qnadashboard'>
             View all <ArrowRightIcon />
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};
QnATile.propTypes = {
  className: PropTypes.string
};

