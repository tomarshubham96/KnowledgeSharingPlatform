import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';



const useStyles = makeStyles({
  // paper: {    
  //     height:'100%',
  //     width:'80%',
  // },
  player:{
    paddingTop: '0 !important',
    height: '100% !important',
  }
});

export default function ContentPlayer(props) {
  const classes = useStyles();  

  return (
    <span id='video-player'>
     <ReactPlayer
          className={classes.player}
          playing
          width='100%'
          height='100%'
      url={'https://www.youtube.com/watch?v=cAtizixH-sM'}
      controls={true}
   />
    </span>
  );
}

ContentPlayer.propTypes = {
  course: PropTypes.object,
};