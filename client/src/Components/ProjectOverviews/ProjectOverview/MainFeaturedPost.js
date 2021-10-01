import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  featureImg: {
    width: '100%',
    height: '250px',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover'
  },
  featureTitle: {
    color: 'white',
    padding: '30px',
    position: 'absolute',
    left: '0',
    top: '4%'
  },
  featureTitleText: {
    fontSize: '55px'
  }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <React.Fragment>
      <img src={post.image} alt="Project Title" className={classes.featureImg} />
      <div className={classes.featureTitle}>
        <h1 className={classes.featureTitleText}>{post.title}</h1>
      </div>
    </React.Fragment>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
